const PixelClock = {
    init() { this.update(); setInterval(()=>this.update(), 1000); },
    update() {
        const n = new Date();
        const time = n.getHours().toString().padStart(2,'0') + ":" + n.getMinutes().toString().padStart(2,'0');
        document.querySelectorAll('.time, .aod-clock').forEach(el => el.innerText = time);
        document.querySelectorAll('.date, .aod-date').forEach(el => el.innerText = n.toLocaleDateString('id-ID', {weekday:'long', day:'numeric', month:'short'}));
    }
};
window.addEventListener('DOMContentLoaded', ()=>PixelClock.init());