/* animations.js */
const PixelAnimations = {
    emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
    fadeIn(el) { el.animate([{opacity:0, transform:'translateY(20px)'},{opacity:1, transform:'translateY(0)'}], {duration:600, easing:this.emphasized, fill:'forwards'}); }
};