import LoadMenu from './Modules/Toolbar-Menu.js';
import ScrollSpy from './Modules/Desktop-ScrollSpy.js';
import { LoadProjects } from './Modules/Projects.js';
import ValidateForm from './Modules/Validations.js';
import { UpdateForm, updateStorage } from './Modules/LocalStorage.js';

window.addEventListener('resize', () => {
  ScrollSpy();
  LoadProjects();
  LoadMenu()
});

window.addEventListener('load', () => {
  // setTimeout(DesctopToolBar(), 100);
  ScrollSpy();
  LoadProjects();
  LoadMenu()
  ValidateForm();
  setTimeout(200, updateStorage());
  setTimeout(200, UpdateForm());
});
