let Toolbar = document.querySelector('#ToolBar');
let navs = Toolbar.querySelector('nav');
let currentnav = navs.innerHTML;
function DesctopToolBar(){
  if (window.innerWidth > 766){
    navs.innerHTML = ""
    navs.innerHTML = `<ul class="Descnavs">
    <li><a href='#Portfolio'>Porfolio</a></li>
    <li><a href='#About'>About</a></li>
    <li><a href='#contact'>Contact</a></li>
    <li><img src="Images/Icon - Mail.png" alt=""></li>
  </ul>`
  }
  else {
    navs.innerHTML = currentnav
  }
}

export {DesctopToolBar}