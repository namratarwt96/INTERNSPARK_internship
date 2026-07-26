
// Sidebar Toggle

const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", () => {
    sidebar.classList.toggle("hide");
});

// Category Active Button

const buttons = document.querySelectorAll(".categories button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});