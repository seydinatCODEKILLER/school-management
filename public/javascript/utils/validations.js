export function validateLogin(email, password) {
  let isValid = true;

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  emailError.textContent = "";
  passwordError.textContent = "";

  if (!email) {
    emailError.textContent = "L'adresse mail est requise";
    emailError.classList.add("text-red-500");
    isValid = false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    emailError.textContent = "L'adresse mail est invalide";
    emailError.classList.add("text-red-500");
    isValid = false;
  }
  if (!password) {
    passwordError.textContent = "Le mot de passe est requise";
    passwordError.classList.add("text-red-500");
    isValid = false;
  }
  return isValid;
}
