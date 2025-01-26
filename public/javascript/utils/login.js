import { validateLogin } from "./validations.js";
import { showNotification } from "./notification.js";

export async function loginUser(email, password) {
  const response = await fetch("../../src/data/data.json");
  const data = await response.json();

  const users = [
    ...data.Etudiants,
    ...data.Professeurs,
    ...data.Administrateurs,
  ];

  if (!validateLogin(email, password)) {
    return null;
  }

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    showNotification("Email ou mot de passe incorrect", "error");
    return null;
  }
  return user;
}
