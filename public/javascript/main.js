import { loginUser } from "./utils/login.js";
import { redirectUserPage } from "./utils/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = await loginUser(email, password);
    if (user) {
      console.log(user);
      redirectUserPage(user);
    }
  });
});
