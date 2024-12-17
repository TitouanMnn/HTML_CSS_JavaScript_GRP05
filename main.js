function darkmode() {
    var element = document.body;
    element.classList.toggle("darkmode");
  }




// Sélection des éléments
const links = document.querySelectorAll("nav li");
const icons = document.querySelector(".menu-icon"); // Bouton ou icône pour le menu
const nav = document.querySelector("nav"); // Élément de navigation

// Vérifie que les éléments existent avant d'ajouter les événements
if (icons && nav) {
  icons.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

if (links.length > 0) {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}
// Programme pour valider le MDP du formulaire
let passwordInput = document.getElementById('password');

function validatePassword() {
    let passwordError = document.getElementById('mdpError');
    // Expression régulière pour vérifier la présence d'au moins une majuscule, une minuscule, un chiffre et un caractère spécial
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\/-])(?=.*\d).{8,}$/;

    if (passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = 'Le mot de passe est validé';
        passwordError.style.color = 'green';
    } else {
        passwordError.textContent = 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre, un caractère spécial, et faire au moins 8 caractères de long.';
        passwordError.style.color = 'red';
    }
}

passwordInput.addEventListener('input', validatePassword);

// Sélection des éléments du DOM
const form = document.querySelector("section.contacte form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

// Ajout d'un événement à la soumission du formulaire
form.addEventListener("submit", (e) => {
  // Empêche l'envoi du formulaire si les mots de passe ne correspondent pas
  if (password.value !== confirmPassword.value) {
    e.preventDefault(); // Bloque l'envoi du formulaire
    message.textContent = "Les mots de passe ne correspondent pas.";
    message.className = "error"; // Affiche un message d'erreur
  } else {
    message.textContent = ""; // Réinitialise le message d'erreur si tout est correct
  }
});

// Vérification en temps réel des mots de passe (optionnel)
confirmPassword.addEventListener("input", () => {
  if (password.value === confirmPassword.value) {
    message.textContent = "Les mots de passe correspondent !";
    message.className = "success"; // Style success
  } else {
    message.textContent = "Les mots de passe ne correspondent pas.";
    message.className = "error"; // Style erreur
  }
});