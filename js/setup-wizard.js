/* setup-wizard.js */
const setupWizard = {
    step: 1,
    nextStep() {
        document.getElementById(`step-${this.step}`).style.display = 'none';
        this.step++;
        if(this.step <= 3) { document.getElementById(`step-${this.step}`).classList.add('active'); }
        else { 
            document.getElementById('setupLayer').style.opacity = '0';
            setTimeout(()=> document.getElementById('setupLayer').style.display='none', 800);
            localStorage.setItem('setup_done', 'true');
        }
    },
    init() { if(localStorage.getItem('setup_done')) document.getElementById('setupLayer').style.display='none'; else document.getElementById('step-1').classList.add('active'); }
};