const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const forgotLink = document.querySelector(".forgot-link");
const registerSection = document.querySelector(".register");
const loginSection = document.querySelector(".login");
const forgotSection = document.querySelector(".forgot");
const closeIcon = document.querySelector(".icon-close");

registerLink.addEventListener("click", (e) => {
     e.preventDefault();
    loginSection.style.display = "none";
    registerSection.style.display = "flex";
});

loginLink.addEventListener("click", () => {
   loginSection.style.display = "flex";
   registerSection.style.display = "none";
});

forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
   loginSection.style.display = "none";
   forgotSection.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
    forgotSection.style.display = "none";
    loginSection.style.display = "flex";
});