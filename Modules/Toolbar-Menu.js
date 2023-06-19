const HomePage = document.querySelector('body').innerHTML;
function ScrollTo(elclass, location = HomePage) {
  const body = document.querySelector('body');
  body.innerHTML = '';
  body.innerHTML = location;
  const Menubar = document.querySelector('#tool-Button');
  Menubar.addEventListener('click', () => {
    let menu = document.createElement('div');
    menu.innerHTML = `<div id="Menu">
    <a id="closeMenu" href=""><i class="fa fa-close fa-2x"></i></a>
    <a href="#" data-target = 'works'><h1>Portfolio <hr></h1></a>
    <a href="#" data-target = 'Aboutme'><h1>About <hr></h1></a>
    <a href="#" data-target = 'contacts'><h1>Contact <hr></h1></a>
  </div>`;
    const body = document.querySelector('body');
    body.innerHTML = '';
    body.appendChild(menu);
    menu = document.querySelector('#Menu');
    const options = menu.querySelectorAll('[data-target]');
    options.forEach((opt) => { opt.addEventListener('click', () => { ScrollTo(opt.getAttribute('data-target')); }); });
  });
  const element = document.querySelector(`.${elclass}`);
  setTimeout(() => {
    element.scrollIntoView();
  }, 100);
}

function LoadMenu() {
  let menu = document.createElement('div');
  menu.innerHTML = `<div id="Menu">
  <a id="closeMenu" href=""><i class="fa fa-close fa-2x"></i></a>
  <a href="#" data-target = 'works'><h1>Portfolio <hr></h1></a>
  <a href="#" data-target = 'Aboutme'><h1>About <hr></h1></a>
  <a href="#" data-target = 'contacts'><h1>Contact <hr></h1></a>
</div>`;
  const body = document.querySelector('body');
  body.innerHTML = '';
  body.appendChild(menu);
  menu = document.querySelector('#Menu');
  const options = menu.querySelectorAll('[data-target]');
  options.forEach((opt) => { opt.addEventListener('click', () => { ScrollTo(opt.getAttribute('data-target')); }); });
}

function AddMenuEvent() {
  if (window.innerWidth < 766) {
    const Menubar = document.querySelector('#tool-Button');
    Menubar.addEventListener('click', () => {
      LoadMenu();
    });
  }
}

export default AddMenuEvent;