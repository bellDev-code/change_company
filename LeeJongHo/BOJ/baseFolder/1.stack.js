class Stack {
    constructor() {
        this.arr = [];
    }

    push(value) {
        return this.arr.push(value)
    }

    pop(index) {
        if(index === this.arr.length - 1) {
            return this.arr.pop()
        }

        let result = this.arr.splice(index, 1)
        return result
    }

    top() {
        return this.arr[this.arr.length - 1]
    }

    bottom() {
        return this.arr[0]
    }
}

const newStack = new Stack();
newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.push(100)
newStack.push(200)
newStack.push(300)
newStack.pop(3)

console.log(newStack, newStack.top(), newStack.bottom())
