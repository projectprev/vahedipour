const open = document.getElementById('menuHam')
const close = document.getElementById('menuMobile')
const close_x = document.getElementById('close')

function func() {

    close.classList.toggle('left-0')
    close.classList.toggle('left-[-100%]')
    // close_x.close_x.toggle('left-0')
   
}

function func2() {
    // close.classList.add('left-[-100%]')
    close.classList.toggle('left-0')
    close.classList.toggle('left-[-100%]')
}

open.addEventListener('click', func)
close_x.addEventListener('click', func2)
