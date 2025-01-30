import { validateLogin } from "./validations.js";
import { showNotification } from "./notification.js";
import { redirectUrl } from "./utils.js";

export async function loginUser(email, password) {
  const response = await fetch("../../src/data/data.json");
  const data = await response.json();

  const users = [
    ...data.Etudiants,
    ...data.Professeurs,
    ...data.Administrateurs,
  ];

  console.log(users);

  if (!validateLogin(email, password)) {
    return null;
  }

  const user = users.find((u) => u.email === email && u.password === password);
  console.log(user);

  if (!user) {
    showNotification("Email ou mot de passe incorrect", "error");
    return null;
  }
  return user;
}

export function autoLogin() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (user) {
    redirectUrl(`./src/views/${user.role}.html`);
  }
}

export function logout() {
  localStorage.removeItem("currentUser");
  redirectUrl("/");
}
