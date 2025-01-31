import { handleNotifications } from "../utils/notification.js";
import { checkUserAccess } from "../utils/auth.js";
import { logout } from "../utils/login.js";
import { displayAdminInfo } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  handleNotifications();
  checkUserAccess(["administrator"]);
  const logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", () => logout());

  const admin = JSON.parse(localStorage.getItem("currentUser"));
  displayAdminInfo(admin);
});
