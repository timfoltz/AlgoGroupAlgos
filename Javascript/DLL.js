// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // push to head
    addHead(node) {
        if(this.head){
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            this.length++;
        }else{
            this.head = node;
            this.tail = node;
            this.length++

        }
        
    }

    // pop from tail
    removeTail() {
        if(this.head == null){
            return "List is empty"
        }
        if(this.head == this.tail){
        let temp = this.head;
        this.head = null;
        this.tail = null;
        return temp;
        }else{
            let temp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
            return temp;
        }
    }

    // return is empty
    isEmpty() {}

    // return length
    size() {}

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {}

    // pop from head
    removeHead() {}
}