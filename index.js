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
}

function displayList(list) { 
    let curr = list.head;
    let arr = [];
    while (curr && curr !== null) { 
        arr.push(curr.value);
        curr = curr.next
    }
    console.log(arr.join(' -> '))
}

function reverseList(list) { 
    let curr = list.head;
    let prev, next = null;
    while (curr !== null) { 
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next; 
    }
    list.head = prev;
    return list;
}

let list = new LinkedList();
list.addToEnd(1);
list.addToEnd(2);
list.addToEnd(3);

displayList(list);
displayList(reverseList(list));