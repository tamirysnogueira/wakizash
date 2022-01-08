let menuHamburguer = document.getElementById('menuHamburguer')
let containerMenuMobile = document.getElementById('containerMenuMobile')
let closeMenu = document.getElementById('closeMenu')

menuHamburguer.addEventListener('click', ()=> {
    menuHamburguer.style.borderTopLeftRadius = '10px'
    menuHamburguer.style.borderTopRightRadius = '10px'
    menuHamburguer.style.backgroundColor = '#C5C6C0'


    containerMenuMobile.style.top = '70px'
})

closeMenu.addEventListener('click', ()=> {
    menuHamburguer.style.borderTopLeftRadius = '0'
    menuHamburguer.style.borderTopRightRadius = '0'
    menuHamburguer.style.backgroundColor = 'transparent'


    containerMenuMobile.style.top = '-400px'
})