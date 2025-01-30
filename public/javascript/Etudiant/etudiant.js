import { handleNotifications } from "../utils/notification.js";
import { checkUserAccess } from "../utils/auth.js";

document.addEventListener("DOMContentLoaded", () => {
  handleNotifications();
  checkUserAccess(["student"]);
});
