class Queue {
    constructor() {
        this.arr = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.arr[this.rear++] = value
    }

    dequeue() {
        const value = this.arr[this.front]
        delete this.arr[this.front]
        this.front++
        return value
    }
}

const newQue = new Queue()
newQue.enqueue(1)
newQue.enqueue(2)
newQue.enqueue(3)
newQue.enqueue(100)
newQue.enqueue(200)
newQue.enqueue(300)
newQue.dequeue()

console.log(newQue.arr)