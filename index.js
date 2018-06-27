class LinkedList {
    constructor() { this.head = null; } 
    addToHead(value) {
      const newNode = { value };
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }
    addToEnd(value) {
      const newNode = { value, next: null };
      if (this.head===null) this.head = newNode; 
      else {
        let curr = this.head;
        while (curr.next !== null) 
            curr = curr.next;
        curr.next = newNode;
        this.length++;
        return this;
      }
    }
    reverseList() { 
        let curr = this.head;
        let prev, nxt = null;
        while (curr) { 
            nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        this.head = prev;
        this.displayList();
    }
    displayList() { 
        let curr = this.head; 
        let arr = [];
        while (curr) { 
            arr.push(curr.value);
            curr = curr.next;
        }
        console.log(arr.join(' -> '));
    }
}

let list = new LinkedList();
const n = 5; 

for (let i = 1; i <= n; i++) list.addToEnd(i);

list.displayList();
list.reverseList();