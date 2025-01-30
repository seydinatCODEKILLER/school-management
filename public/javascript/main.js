import { autoLogin, loginUser, logout } from "./utils/login.js";
import { setNotification } from "./utils/notification.js";
import { redirectUserPage } from "./utils/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  autoLogin();
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = await loginUser(email, password);
    console.log(user);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setNotification(`Bienvenue, ${user.prenom} ${user.nom} !`, "success");
      redirectUserPage(user);
    }
  });
});
