export { Trie }

class TrieNode{
    constructor(){
        this.children = Array(10).fill(null);
        this.parent = null;
    }
}
