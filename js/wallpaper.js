const wpBtn = document.getElementById('changeWpBtn');
const wpIn = document.createElement('input'); wpIn.type='file';
wpBtn.onclick = () => wpIn.click();
wpIn.onchange = (e) => {
    const r = new FileReader();
    r.onload = (ev) => { document.getElementById('uiLayer').style.backgroundImage = `url(${ev.target.result})`; localStorage.setItem('wp', ev.target.result); };
    r.readAsDataURL(e.target.files[0]);
};