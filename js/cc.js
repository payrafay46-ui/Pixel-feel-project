// js/cc.js BARU

const ccController = {
    ccShade: document.getElementById('ccShade'),
    swipeZone: document.getElementById('ccSwipeZone'),
    isShadeOpen: false,

    init() {
        // Deteksi Swipe/Klik di area atas (dummy swipe)
        this.swipeZone.addEventListener('mousedown', (e) => this.startSwipe(e));
        
        // Tombol Settings di CC
        document.getElementById('ccSettingsBtn').addEventListener('click', () => {
            this.closeShade();
            // Buka app settings
            appSystem.openApp('settings', document.getElementById('ccSettingsBtn'));
        });
    },

    startSwipe(e) {
        this.openShade();
    },

    openShade() {
        this.ccShade.classList.add('cc-open');
        this.isShadeOpen = true;
    },

    closeShade() {
        this.ccShade.classList.remove('cc-open');
        this.isShadeOpen = false;
    }
};

window.addEventListener('DOMContentLoaded', () => ccController.init());
