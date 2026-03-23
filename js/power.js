/* power.js */
let screenOn = true;
document.getElementById('pwrBtn').onclick = () => {
    const scr = document.getElementById('mainScreen');
    if(screenOn) { scr.classList.add('aod-active'); screenOn = false; }
    else { scr.classList.remove('aod-active'); screenOn = true; }
};