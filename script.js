// Array com os nomes dos arquivos PDF
const pdfFiles = ["pdf/Dash - Produção-1.pdf", "pdf/Dash - Produção-2.pdf", "pdf/Dash - Produção-3.pdf", "pdf/Dash - Produção-4.pdf"];
let currentIndex = 0;

// Função para carregar o próximo PDF no iframe
function showNextPDF() {
    const pdfFrame = document.getElementById("pdfFrame");
    pdfFrame.src = pdfFiles[currentIndex];
    currentIndex = (currentIndex + 1) % pdfFiles.length; // Volta ao início após o último arquivo
}

// Atualiza o HTML automaticamente a cada 50 segundos
function reloadPage() {
    location.reload();
}

// Inicia o slideshow
setInterval(showNextPDF, 10000); // Altera o PDF a cada 10 segundos
setTimeout(reloadPage, 50000);   // Recarrega a página a cada 50 segundos

// Exibe o primeiro PDF ao carregar a página
showNextPDF();
