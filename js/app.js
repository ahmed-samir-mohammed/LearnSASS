const toggelThemeBtn = document.getElementById("toggel-theme-btn");
const html = document.querySelector("html");

toggelThemeBtn.addEventListener("click", () => {
    html.classList.toggle("light");
    html.classList.toggle("dark");
});
