document.addEventListener("DOMContentLoaded", function () {
    const calendarSection = document.getElementById("calendar-section");

    fetch("/components/calendario.html")
        .then(response => response.text())
        .then(html => {
            calendarSection.innerHTML = html;
            initializeCalendarEvents(); // Llamamos la función directamente
        })
        .catch(error => console.error("❌ Error al cargar el calendario:", error));
});
