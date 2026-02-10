const lyrics = "Baby I'm-a want you Baby I'm-a need you You're the only one I care enough to hurt about Maybe I'm-a crazy But I just can't live without Your lovin' and affection Givin' me direction Like a guiding light to help me through my darkest hour Lately I'm a-prayin' That you'll always be a-stayin' beside me Used to be my life was just emotions passing by Feeling all the while and never really knowing why Lately I'm a-prayin' That you'll always be a-stayin' beside me Baby I'm-a want you Baby I'm-a need you You're the only one I care enough to hurt about Maybe I'm-a crazy But I just can't live without Your lovin' and affection Givin' me direction Like a guiding light to help me through my darkest hour Lately I'm a-prayin' That you'll always be a-stayin' beside me Used to be my life was just emotions passing by Then you came along and made me laugh and made me cry You taught me why Baby I'm-a want you Baby I'm-a need you Oh it took so long to find you baby Baby I'm-a want you Baby I'm-a need you ";

function fillText() {
    const container = document.getElementById('text-portrait');
    // Repeat the lyrics enough times to fill the entire viewport
    const repeatCount = 1000;
    container.textContent = lyrics.repeat(repeatCount);
}

function getBaseSize() {
    const w = window.innerWidth;
    if (w <= 360) return 2;
    if (w <= 480) return 2.5;
    if (w <= 768) return 3;
    if (w <= 1024) return 3.5;
    return 4;
}

let initialDPR = window.devicePixelRatio || 1;

function adjustForZoom() {
    const currentDPR = window.devicePixelRatio || 1;
    const zoomLevel = currentDPR / initialDPR;
    const baseSize = getBaseSize();
    const container = document.getElementById('text-portrait');
    container.style.fontSize = (baseSize / zoomLevel) + 'px';
    container.style.lineHeight = (baseSize / zoomLevel) + 'px';
}

window.addEventListener('DOMContentLoaded', () => {
    fillText();
    adjustForZoom();
});
window.addEventListener('resize', adjustForZoom);
window.addEventListener('orientationchange', () => {
    setTimeout(adjustForZoom, 100);
});
