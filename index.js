const openMenu = document.querySelector('.header__menu-phone')
        const menu = document.querySelector('.menu__phone')
        const body = document.querySelector('body')

        openMenu.addEventListener('click', function(){
            menu.classList.toggle('open')
            body.classList.toggle('overlay')
        })