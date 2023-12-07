window.onresize = () => { // to skip all checked chekboxes (burger, load more)
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((el) => {
        
        el.checked = false
    })
}