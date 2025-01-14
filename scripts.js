function scrollWindow() {
    let currentPos = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo(0, currentPos + 1);
}

function autoRefresh() {
    setTimeout(() => {
        location.reload();
    }, 70000); // Atualiza a página a cada 70 segundos
}

window.onload = () => {
    setInterval(scrollWindow, 50); // Rola lentamente a cada 50ms
    autoRefresh();
};
