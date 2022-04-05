const btmMenu = document.getElementById('btm-menu')

function toggleMenu(){
    const menu = document.getElementById('menu-bar')
    menu.classList.toggle('active')
}

btmMenu.addEventListener('click', toggleMenu)