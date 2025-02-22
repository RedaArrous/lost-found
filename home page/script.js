document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".menu-button").forEach(button => {
        button.addEventListener("click", function (e) {
            let menu = this.nextElementSibling;
            document.querySelectorAll(".menu").forEach(m => {
                if (m !== menu) m.style.display = "none"; // Close other menus
            });
            menu.style.display = (menu.style.display === "block") ? "none" : "block";
            e.stopPropagation(); // Prevent closing when clicking inside
        });
    });

    document.addEventListener("click", function () {
        document.querySelectorAll(".menu").forEach(menu => {
            menu.style.display = "none";
        });
    });
});
