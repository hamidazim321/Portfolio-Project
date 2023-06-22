import AddMenuEvent from './Modules/Toolbar-Menu.js';
import DesctopToolBar from './Modules/Desktop-Dom.js';
import ScrollSpy from './Modules/Desktop-ScrollSpy.js';
import { LoadProjects } from './Modules/Projects.js';
import { UpdateForm, updateStorage } from './Modules/LocalStorage.js';

window.addEventListener('resize', () => {
  setTimeout(DesctopToolBar(), 100);
  ScrollSpy();
  LoadProjects();
  AddMenuEvent();
});

window.addEventListener('load', () => {
  setTimeout(DesctopToolBar(), 100);
  ScrollSpy();
  LoadProjects();
  AddMenuEvent();
  setTimeout(200,updateStorage())
  setTimeout(200,UpdateForm())
});