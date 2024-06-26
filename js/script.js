const navMobile = document.querySelector ('.nav-mobile');
const navBtn = document.querySelector ('.hamburger');
const footerYear = document.querySelector ('.footer__year');
const msgStatus = document.querySelector('.msg-status')


const handleNav = () => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')

}


const handleCurrentYear = () => {
    const year = new Date().getFullYear();
	footerYear.innerText = year;
}

if (document.location.search === '?mail_status=sent'){
    msgStatus.classList.add('success')
    msgStatus.textContent = 'Wiadomość wysłana!'

    setTimeout(() => {
        msgStatus.classList.remove('success')
    }, 3000)
}

if (document.location.search === '?mail_status=error'){
    msgStatus.classList.add('error')
    msgStatus.textContent = 'Wystąpił błąd.'

    setTimeout(() => {
        msgStatus.classList.remove('error')
    }, 3000)
}


navBtn.addEventListener('click', handleNav);
handleCurrentYear();