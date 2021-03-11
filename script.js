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
