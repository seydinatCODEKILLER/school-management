export function displayAdminInfo(user) {
  document.getElementById(
    "username"
  ).textContent = `${user.nom} ${user.prenom}`;
  document.getElementById("email").textContent = user.email;
  document.getElementById("avatar_admin").src =
    user.avatar || "default-avatar.png";
}
