console.log('%cWUIXPPLE', 'background:#000;color:#fff;font-size:28px;');

function setMobileSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', () => {
  setMobileSize();
});
