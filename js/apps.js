// js/apps.js BARU

const appSystem = {
    overlay: document.getElementById('appWindowOverlay'),
    currentApp: null,

    init() {
        // Tombol launch di Home Screen
        document.querySelectorAll('.launch-app').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const appId = btn.getAttribute('data-app');
                this.openApp(appId, btn);
            });
        });

        // Tombol close (Arrow Back) di App Header
        document.querySelectorAll('.close-app').forEach(btn => {
            btn.addEventListener('click', () => this.closeApp());
        });
        
        // Logika menu Wallpaper di Settings
        document.getElementById('wpMenuItem').addEventListener('click', () => {
            // Trigger ganti wallpaper (bisa pakai dummy atau panggil wallpaper.js logic)
            alert("Buka Gallery Aliran...");
            this.closeApp();
        });
    },

    openApp(appId, iconBtn) {
        const appWindow = document.getElementById(`app-${appId}`);
        if (!appWindow) return;

        this.overlay.style.display = 'block';
        this.currentApp = appWindow;
        PixelAnimations.appOpen(appWindow, iconBtn);
    },

    closeApp() {
        if (!this.currentApp) return;

        PixelAnimations.appClose(this.currentApp);
        setTimeout(() => {
            this.overlay.style.display = 'none';
            this.currentApp.style.display = 'none';
            this.currentApp = null;
        }, 300); // Sinkron dengan durasi animasi
    }
};

window.addEventListener('DOMContentLoaded', () => appSystem.init());
