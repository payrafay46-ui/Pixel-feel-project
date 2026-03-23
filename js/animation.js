// js/animations.js Update

const PixelAnimations = {
    // Easing Material 3 Emphasized (Cepat, Smooth, berkarakter)
    easings: {
        emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
        decelerate: 'cubic-bezier(0, 0, 0, 1)',
        accelerate: 'cubic-bezier(0.3, 0, 1, 1)',
    },

    // Animasi Setup Wizard: Objek Interaktif (Floating/Pop)
    oobePop(element, delay = 0) {
        element.style.opacity = '0';
        element.animate([
            { transform: 'scale(0.8) translateY(10px)', opacity: 0 },
            { transform: 'scale(1.05) translateY(-5px)', opacity: 1 },
            { transform: 'scale(1) translateY(0)', opacity: 1 }
        ], {
            duration: 800,
            delay: delay,
            easing: this.easings.emphasized,
            fill: 'forwards'
        });
    },

    // Animasi Buka App (Dari Ikon ke Jendela Penuh)
    appOpen(appWindow, iconElement) {
        const iconRect = iconElement.getBoundingClientRect();
        const frameRect = document.querySelector('.pixel-9-frame').getBoundingClientRect();
        
        // Hitung posisi awal app window agar sejajar ikon (untuk efek mekar)
        const startX = iconRect.left - frameRect.left;
        const startY = iconRect.top - frameRect.top;

        appWindow.style.display = 'block';
        appWindow.style.transformOrigin = `${startX + iconRect.width/2}px ${startY + iconRect.height/2}px`;

        appWindow.animate([
            { transform: 'scale(0.1)', opacity: 0, borderRadius: '50%' },
            { transform: 'scale(1)', opacity: 1, borderRadius: '42px' }
        ], {
            duration: 350, // Cepat ala Pixel
            easing: this.easings.emphasized,
            fill: 'forwards'
        });
    },

    // Animasi Tutup App (Kembali ke Ikon)
    appClose(appWindow) {
        appWindow.animate([
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(0.8) translateY(20px)', opacity: 0 }
        ], {
            duration: 300,
            easing: this.easings.decelerate,
            fill: 'forwards'
        });
    }
};
