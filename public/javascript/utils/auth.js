import { redirectUrl } from "./utils.js";

export function checkUserAccess(allowedRoles) {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    redirectUrl("/");
    console.log("deconnecte");
    return;
  }
  if (!allowedRoles.includes(user.role)) {
    alert("Accès refusé !");
    redirectUrl("/");
  }
}
