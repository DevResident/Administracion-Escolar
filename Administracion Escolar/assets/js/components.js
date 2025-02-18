// Función para cargar un archivo HTML en un contenedor
function loadComponent(selector, filePath) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar ${filePath}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error(`Error al cargar ${filePath}:`, error));
}

// Función para inicializar el menú hamburguesa
function initializeMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // Cerrar el menú si se hace clic fuera de él
        document.addEventListener("click", function (event) {
            if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove("active");
            }
        }, { once: true }); // Solo ejecuta el evento una vez para evitar acumulaciones
    }
}

// Cargar el header y footer dinámicamente
document.addEventListener('DOMContentLoaded', () => {
    // Determinar la ruta base según la ubicación del archivo
    let basePath = '';
    const pathParts = window.location.pathname.split('/').filter(part => part);
    basePath = pathParts.length > 1 ? '../'.repeat(pathParts.length - 1) : './';

    // Cargar el header solo si el contenedor existe
    const headerContainer = document.querySelector('#header-container');
    if (headerContainer) {
        loadComponent('#header-container', `${basePath}components/header.html`)
            .then(() => initializeMenu())
            .catch(error => console.error('Error al cargar el header:', error));
    }

    // Cargar el footer solo si el contenedor existe
    const footerContainer = document.querySelector('#footer-container');
    if (footerContainer) {
        loadComponent('#footer-container', `${basePath}components/footer.html`)
            .catch(error => console.error('Error al cargar el footer:', error));
    }
});
