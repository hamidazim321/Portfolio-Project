import AddMenuEvent from './Modules/Toolbar-Menu.js';
import DesctopToolBar from './Modules/Desktop-Dom.js';
import ScrollSpy from './Modules/Desktop-ScrollSpy.js';

window.addEventListener('resize', () => {
  setTimeout(DesctopToolBar(), 100);
  ScrollSpy();
});

window.addEventListener('load', () => {
  setTimeout(DesctopToolBar(), 100);
  ScrollSpy();
});

window.addEventListener('resize', () => {
  AddMenuEvent();
});

window.addEventListener('load', () => {
  AddMenuEvent();
});
