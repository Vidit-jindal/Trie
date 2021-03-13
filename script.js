import {Trie} from './Trie.js';

onload = function () {
const templates = document.getElementsByTagName('template')[0];
    const contact_item = templates.content.querySelector("div");
    const add = document.getElementById("add");
    const contact_info = document.getElementById("contact_input");
    const del = document.getElementById("del");
    const delete_info = document.getElementById("delete_input");
    const info = document.getElementById("info");
    const contact_list = new Trie();
    
    add.onclick = function () {
        let details = contact_info.value;
        details = details.split(',');
        if(details.length!==2){
            alert("Incorrectly formatted input");
            return;
        }
        details[0] = details[0].trim();
        details[1] = details[1].trim();
        if(details[1].length!==6){
            alert("Incorrectly formatted input");
            return;
        }
