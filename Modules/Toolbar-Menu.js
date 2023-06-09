function LoadMenu() {
  if (window.innerWidth < 767) {
    const menuBtn = document.querySelector('#tool-button');
    let navMenu = document.querySelector('#nav-list');
    const MenuOptions = document.querySelector('#menu-options').querySelectorAll('li');

    menuBtn.addEventListener('click', (event) => {
      event.preventDefault();
      navMenu = document.querySelector('#nav-list');
      navMenu.classList.remove('hideOnMobile');
    });

    MenuOptions.forEach((li) => {
      li.addEventListener('click', () => {
        navMenu.classList.add('hideOnMobile');
      });
    });
  }
}

export default LoadMenu;