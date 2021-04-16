export { Trie }

class TrieNode{
    constructor(){
        this.children = Array(10).fill(null);
        this.parent = null;
    }
}

class ContactNode{
    constructor(name, number, parent){
        this.name = name;
        this.number = number;
        this.parent = parent;
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode();
        this.current = this.root;

        let init = [
            ["Aarnav", "123456"],
            ["Akul", "123546"],
            ["Shriya", "123654"],
            ["Prateek", "123465"]
        ];
