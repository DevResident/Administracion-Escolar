function initializeCalendarEvents() {

    const buttons = document.querySelectorAll('.period-btn');
    const pdfViewerContainer = document.getElementById('pdf-viewer-container');
    const pdfViewer = document.getElementById('pdf-viewer');
    const downloadBtn = document.getElementById('download-btn');

    if (!pdfViewer || !pdfViewerContainer || !downloadBtn) {
        console.error("❌ Elementos del visor de PDF no encontrados.");
        return;
    }

    const defaultPdfSrc = '/data/Calendario-Escolar-Periodo-2025-2.pdf';

    function loadPdf(pdfSrc) {
        if (pdfSrc) {
            pdfViewer.setAttribute("src", pdfSrc);  // ✅ Ahora usamos `src` en `<embed>`
            pdfViewerContainer.style.display = 'block';
            downloadBtn.setAttribute("href", pdfSrc);
            downloadBtn.setAttribute("download", "Calendario-Escolar-Periodo-2025-2.pdf");
            downloadBtn.style.display = 'inline-block';

            setTimeout(() => {
                if (pdfViewer.clientHeight === 0) {
                    pdfViewerContainer.style.display = 'none';
                    downloadBtn.innerText = "Descargar PDF (No se puede visualizar en tu dispositivo)";
                }
            }, 500);
        } else {
            pdfViewerContainer.style.display = 'none';
            downloadBtn.style.display = 'none';
        }
    }

    // ✅ Cargar el PDF predeterminado al iniciar
    loadPdf(defaultPdfSrc);

    // ✅ Agregar eventos a los botones de períodos
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const pdfSrc = this.getAttribute('data-pdf');
            loadPdf(pdfSrc);
        });
    });
}
