document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", (event) => {
            event.stopPropagation();
            const isActive = navLinks.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", isActive);
        });

        // Cerrar el menú si se hace clic fuera de él
        document.addEventListener("click", function (event) {
            if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }
});

