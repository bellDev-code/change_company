const input = Number(require('fs').readFileSync('./txt/2164.txt').toString());

// console.log(input)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.length++;
    }

    getHead() {
        return this.head.value
    }

    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    getLength() {
        return this.length;
    }
}

const cards = new LinkedList()
for(let i = 1; i <= input; i++) {
    cards.push(i)
}

while (cards.getLength() !== 1) {
    cards.removeHead();
    cards.push(cards.getHead()); 
    cards.removeHead();
}

console.log(cards.getHead())