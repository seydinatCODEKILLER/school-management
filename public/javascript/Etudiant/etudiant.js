import { handleNotifications } from "../utils/notification.js";
import { checkUserAccess } from "../utils/auth.js";
import { logout } from "../utils/login.js";

import {
  displayStudentCourses,
  displayStudentInfo,
  getStudentClassName,
  getStudentCourses,
} from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  handleNotifications();
  checkUserAccess(["student"]);
  const logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", () => logout());
  const user = JSON.parse(localStorage.getItem("currentUser"));
  displayStudentInfo(user);
  const className = await getStudentClassName(user.id_classe);
  const courses = await getStudentCourses(user.id);
  displayStudentCourses(courses, className);
});
