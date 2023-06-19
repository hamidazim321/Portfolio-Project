import { AddMenuEvent } from "./Modules/Toolbar-Menu.js";
import { DesctopToolBar } from "./Modules/Desktop-Dom.js";

window.addEventListener('resize', function(){
    setTimeout(DesctopToolBar(),200)
});


window.addEventListener('load', function(){
    setTimeout(DesctopToolBar(),200)
});

window.addEventListener('resize', function(){
    AddMenuEvent()
});

window.addEventListener('load', function(){
    AddMenuEvent()
});