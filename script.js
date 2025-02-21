let video = document.getElementById("camera");
let canvas = document.getElementById("qrCanvas");
let qrResult = document.getElementById("qrResult");
let contador = document.getElementById("contador");
let iniciarBtn = document.getElementById("iniciar");
let finalizarBtn = document.getElementById("finalizar");
let refazerBtn = document.getElementById("refazer");
let enviarBtn = document.getElementById("enviar");
let ctx = canvas.getContext("2d");

let codigosLidos = new Set();
let leituraAtiva = false;

// URL do Google Apps Script
const API_URL = "https://script.google.com/macros/s/AKfycbxkJ8u9JeVy8tXYVHovhH-HinHgSsEHo0YSNaRAfrA38XwrB6zyVpn2ioxco428UeDz/exec";  

// Inicia a câmera
function iniciarLeitura() {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
        .then(stream => {
            video.srcObject = stream;
            video.style.display = "block";
            leituraAtiva = true;
            iniciarBtn.disabled = true;
            finalizarBtn.disabled = false;
            scanQRCode();
        })
        .catch(err => console.error("Erro ao acessar a câmera:", err));
}

// Para a leitura e desativa a câmera
function finalizarLeitura() {
    let tracks = video.srcObject.getTracks();
    tracks.forEach(track => track.stop());
    video.style.display = "none";
    leituraAtiva = false;
    iniciarBtn.disabled = false;
    finalizarBtn.disabled = true;
    alert("Leitura finalizada. Total de códigos lidos: " + codigosLidos.size);
}

// Captura o QR Code continuamente
function scanQRCode() {
    if (leituraAtiva && video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
            let novoCodigo = code.data.trim();
            
            if (!codigosLidos.has(novoCodigo)) {
                qrResult.innerText = novoCodigo;
                refazerBtn.disabled = false;
                enviarBtn.disabled = false;
            } else {
                alert("Código já lido!");
            }
        }
    }
    requestAnimationFrame(scanQRCode);
}

// Refazer leitura
function refazerLeitura() {
    qrResult.innerText = "Nenhum";
    refazerBtn.disabled = true;
    enviarBtn.disabled = true;
}

// Enviar para Google Sheets
function enviarDados() {
    let codigo = qrResult.innerText;
    if (codigo === "Nenhum" || codigosLidos.has(codigo)) {
        alert("Código inválido ou já registrado!");
        return;
    }

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codigo: codigo, timestamp: new Date().toISOString() })
    })
    .then(response => response.json())
    .then(data => {
        alert("Registro salvo com sucesso!");
        codigosLidos.add(codigo);
        contador.innerText = codigosLidos.size;
        refazerLeitura();
    })
    .catch(error => console.error("Erro ao enviar os dados:", error));
}
