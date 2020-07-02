const pos = document.querySelector('body');
pos.addEventListener('mousemove', e => {
    console.log(e)
    pos.style.setProperty('--mouse-x', e.clientX + 'px')
    pos.style.setProperty('--mouse-y', e.clientY + 'px')
})