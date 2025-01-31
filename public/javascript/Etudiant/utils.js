export function displayStudentInfo(user) {
  document.getElementById(
    "username"
  ).textContent = `${user.nom} ${user.prenom}`;
  document.getElementById("email").textContent = user.email;
  document.getElementById("avatar_student").src =
    user.avatar || "default-avatar.png";
}

function colorCoursByClassName(coursName) {
  let color = "";
  switch (coursName) {
    case "Design graphique":
      color = "bg-blue-300";
      break;
    case "Javascript":
      color = "bg-yellow-300";
      break;
    case "HTML/CSS":
      color = "bg-orange-300";
      break;
    default:
      break;
  }

  return color;
}

export function displayStudentCourses(courses, className) {
  const coursesContainer = document.getElementById("coursesContainer");
  coursesContainer.innerHTML = "";

  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add(
      "rounded",
      "p-2",
      "shadow-md",
      "flex",
      "flex-col",
      "gap-1"
    );

    courseCard.innerHTML = `
      <h3 class='p-1 rounded ${colorCoursByClassName(
        course.libelle
      )} font-bold text-blue-500"><i class="ri-quill-pen-ai-line'></i> ${
      course.libelle
    }</h3>
      <p class="font-medium"> ${className}</p>
      <p class="font-medium"><i class="ri-graduation-cap-line"></i> ${
        course.professeur
      }</p>
    `;
    coursesContainer.appendChild(courseCard);
  });
}

export async function getStudentClassName(id_classe) {
  const response = await fetch("../../../src/data/data.json");
  const data = await response.json();
  const studentClass = data.Classes.find((classe) => classe.id === id_classe);
  return studentClass ? studentClass.libelle : "Classe inconnue";
}

export async function getStudentCourses(studentId) {
  const response = await fetch("../../../src/data/data.json");
  const data = await response.json();

  const studentCourses = data.Cours.filter((cours) =>
    cours.id_eleve.includes(studentId)
  );

  return studentCourses.map((cours) => {
    const professor = data.Professeurs.find(
      (prof) => prof.id === cours.id_prof
    );
    return {
      libelle: cours.libelle,
      professeur: professor
        ? `${professor.prenom} ${professor.nom}`
        : "Inconnu",
    };
  });
}
