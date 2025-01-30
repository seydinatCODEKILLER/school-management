export const baseUrlViews = "src/views/";

export function redirectUrl(path) {
  window.location.href = path;
}

export function redirectUserPage(user) {
  const { role } = user;
  switch (role) {
    case "student":
      redirectUrl(`src/views/student.html`);
      break;
    case "teacher":
      redirectUrl(`src/views/teacher.html`);
      break;
    case "administrator":
      redirectUrl(`src/views/administrator.html`);
      break;
    default:
      redirectUrl("/");
      break;
  }
}
