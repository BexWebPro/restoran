const menu = document.getElementById('menu')
const x = document.getElementById('x')
const win = document.querySelector('.modal')

menu.addEventListener("click",() => {
    win.style.opacity = '1'
    win.style.width = '100%'
    win.style.height = 'auto'
})


x.addEventListener("click",() => {
    win.style.opacity = '0'
    win.style.width = '0'
    win.style.height = 'auto'
})