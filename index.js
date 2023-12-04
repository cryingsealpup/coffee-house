console.log(el)
window.onresize = () => {
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((el) => {
        
        el.checked = false
    })
}

