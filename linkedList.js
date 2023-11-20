import Node from "./nodeClass.js";
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        let newNode = new Node(value);
        if (this.head === null) this.head = newNode;
        else {
            let tail = this.head;
            while (tail.next !== null) {
                tail = tail.next;
            }
            tail.next = newNode;
        }
    }
    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    size() {
        let count = 0;
        let current = this.head;
        while (current.next !== null) {
            count++;
            current = current.next;
        }
        return count + 1;
    }
    getHead() {
        console.log(this.head);
        return this.head;
    }
    tail() {
        let current = this.head;
        while (current.next !== null) current = current.next;
        console.log(current)
        return current;
    }
    at(index) {
        let count = 0;
        let current = this.head;
        while (current.next !== null) {
            if (index === count) {
                console.log(current)
                return current.next;
            }
            count++;
            current = current.next;
        }
    }
    pop() {
        let current = this.head;
        let size = this.size();
        for (let i = 1; i < size; i++) {
            if (i === size - 1) {
                current.next = null;
            }
            current = current.next;
        }
        console.log("new size: " + this.size());
    }
    contains(value) {
        let current = this.head;
        while (current.next !== null) {
            if (current.value === value) {
                console.log(true);
                return true;
            }
            current = current.next;
        }
    }
    find(value) {
        let current = this.head;
        let size = this.size();
        for (let i = 0; i < size; i++) {
            if (current.value === value) {
                console.log(value + " is in: " + i)
                return i;
            }
            current = current.next;
        }
    }
    toString() {
        let string = '';
        let current = this.head;
        for (let i = 0; i < this.size(); i++) {
            if (current.next !== null) {
                string += '(' + current.value + ') ->';
            } else {
                string += '(' + current.value + ') -> null';
            }
            current = current.next;
        }
        return string;
    }
}
export default LinkedList;