const modal = document.querySelector('.m')
const open = document.getElementById('open')
const close = document.getElementById('close')


open.addEventListener("click",() => {
    modal.style.opacity = '1'
    modal.style.width = '100%'
    modal.style.height = 'auto'
})


close.addEventListener("click",() => {
    modal.style.opacity = '0'
    modal.style.width = '0px'
    //modal.style.height = '0px'
})


