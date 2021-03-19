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

        contact_list.add(details[1], details[0]);
        info.innerHTML += details + " added to contact list<br>";
        contact_info.value = "";
    };
    
    del.onclick = function () {
        let details = delete_info.value.trim();
        if(details.length!==6){
            alert("Incorrectly formatted input");
            return;
        }
        contact_list.del(details);
        info.innerHTML += details + " deleted from contact list<br>";
        delete_info.value = "";
    };

    let autocomplete = (inp) => {

        /*the autocomplete function takes two arguments,
         the text field element and an array of possible autocompleted values:*/

        let currentFocus;
        inp.input = "";
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function (e) {
            let a, //OUTER html: variable for listed content with html-content
                val = this.value;

            /*close any already open lists of autocompleted values*/
            closeAllLists();
