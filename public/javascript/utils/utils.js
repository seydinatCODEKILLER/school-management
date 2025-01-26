export function redirectUrl(path) {
  window.location.href = path;
}

export function redirectUserPage(user) {
  const { role } = user;
  switch (role) {
    case "etudiant":
      redirectUrl("src/views/student.html");
      break;
    case "teacher":
      redirectUrl("src/views/teacher.html");
      break;
    case "admin":
      redirectUrl("src/views/administrator.html");
      break;
    default:
      redirectUrl("/");
      break;
  }
}
