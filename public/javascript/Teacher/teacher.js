import { handleNotifications } from "../utils/notification.js";
import { checkUserAccess } from "../utils/auth.js";
import { logout } from "../utils/login.js";

document.addEventListener("DOMContentLoaded", () => {
  handleNotifications();
  checkUserAccess(["teacher"]);
  const logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", () => logout());
});
