class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }

        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;

        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}



function peek(q) {
    return q.first.value;
}

function isEmpty(q) {
    if (!q.first) {
        console.log('Empty!')
        return true;
    }
    else {
        console.log('Not empty!')
        return false;
    }
}

function display(q) {
    let curr = q.first
    while (curr) {
        process.stdout.write(`${curr.value} `)
        curr = curr.next;
    }
    console.log('\n')
}

function remove(q, str) {
    let current = q.first;
    let newQ = new Queue;
    while(current !==null) {
        if(current.value === str) {            
            q.dequeue()
        } else {
            newQ.enqueue(current.value)
        }
        current = current.next;
    }
    display(newQ)
    return newQ
}

const starTrekQ = new Queue;
starTrekQ.enqueue('Kirk')
starTrekQ.enqueue('Spock')
starTrekQ.enqueue('Uhura')
starTrekQ.enqueue('Sulu')
starTrekQ.enqueue('Checkov')
const testQ = new Queue

// display(starTrekQ);
// isEmpty(starTrekQ)
// isEmpty(testQ)
remove(starTrekQ, 'Spock');
console.log(starTrekQ)
