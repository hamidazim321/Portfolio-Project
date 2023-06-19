import AddMenuEvent from './Modules/Toolbar-Menu.js';
import DesctopToolBar from './Modules/Desktop-Dom.js';

window.addEventListener('resize', () => {
  setTimeout(DesctopToolBar(), 200);
});

window.addEventListener('load', () => {
  setTimeout(DesctopToolBar(), 200);
});

window.addEventListener('resize', () => {
  AddMenuEvent();
});

window.addEventListener('load', () => {
  AddMenuEvent();
});