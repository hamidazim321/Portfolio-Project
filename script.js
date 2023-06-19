import { AddMenuEvent } from "./Modules/Toolbar-Menu.js";

window.addEventListener('resize', function(){
    AddMenuEvent()
});

window.addEventListener('load', function(){
    AddMenuEvent()
});