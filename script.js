const EXTENSION_NAME = chrome.runtime.getManifest().name;

function overlayImg() {
    console.log(`[${EXTENSION_NAME}] Overlay function is running on ${window.location.hostname}`);
    const imageConts = document.querySelectorAll('.H8Rx8c');
    const storyConts = document.querySelectorAll('.uhHOwf.BYbUcd')
    const pplSayConts = document.querySelectorAll('.oLJ4Uc.l3foLb')
    const shopConts = document.querySelectorAll('.gdOPf.uhHOwf.ez24Df')
    const shoppingSec = document.querySelectorAll('.ArOc1c')
    const totalPics = [...imageConts, ...storyConts, ...pplSayConts, ...shopConts, ...shoppingSec];
    totalPics.forEach((cont) => {
        addOverlay(cont)
    });
}
  
  // Function to add overlay
function addOverlay(cont) {
    if (cont.querySelector('.miku-img-overlay')) return;

    const miku = document.createElement('img');
    miku.id = EXTENSION_NAME;
    miku.src = "https://lastfm.freetls.fastly.net/i/u/770x0/895209df3907a36efbe709a7b10462ec.jpg";
    miku.alt = "Miku Image";
    miku.className = "miku-img-overlay";

    cont.style.position = 'relative';
    cont.appendChild(miku);
};
  
  // MutationObserver for infinite scroll
  const observer = new MutationObserver(overlayImg);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  
  // Immediate overlay on page load
  window.addEventListener('DOMContentLoaded', overlayImg);
  window.addEventListener('load', overlayImg);
  setInterval(overlayImg, 1000); // Fallback
  