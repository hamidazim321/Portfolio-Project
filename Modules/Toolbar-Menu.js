let HomePage = document.querySelector('body').innerHTML;
function LoadMenu(){
  let menu = document.createElement('div');
  menu.innerHTML = `<div id="Menu">
  <a id="closeMenu" href=""><i class="fa fa-close fa-2x"></i></a>
  <a href="#" data-target = 'works'><h1>Portfolio <hr></h1></a>
  <a href="#" data-target = 'Aboutme'><h1>About <hr></h1></a>
  <a href="#" data-target = 'contacts'><h1>Contact <hr></h1></a>
</div>`
let body = document.querySelector('body');
body.innerHTML = "";
body.appendChild(menu);
menu = document.querySelector('#Menu');
let options = menu.querySelectorAll('[data-target]');
for (let opt of options){
  opt.addEventListener('click', function(){ScrollTo(opt.getAttribute('data-target'))})
}
}

function ScrollTo(elclass, location=HomePage){
  let body = document.querySelector('body')
  body.innerHTML = ""
  body.innerHTML = location
  AddMenuEvent()
  let element = document.querySelector('.'+elclass)
  setTimeout(() => {
    element.scrollIntoView();
  }, 100);
}

function AddMenuEvent () {
  if (window.innerWidth < 766){
    let Menubar = document.querySelector('#tool-Button');
    Menubar.addEventListener('click', function(){
    LoadMenu()
    })
  }
}
export {AddMenuEvent}