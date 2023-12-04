import './sass/app.sass';
console.log('fgdf')
window.onresize = () => {
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((el) => {
        
        el.checked = false
    })
}

