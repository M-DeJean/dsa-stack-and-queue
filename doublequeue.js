class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.before = null;
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
            node.before = this.last;
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
    console.log(`First Value is: ${q.first.value}`);
    return q.first.value;
}

function display(q) {
    let curr = q.first
    while (curr) {
        process.stdout.write(`${curr.value} `)
        curr = curr.next;
    }
    console.log('\n')
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

let starTrekQ = new Queue();
starTrekQ.enqueue('Kirk')
starTrekQ.enqueue('Spock')
starTrekQ.enqueue('Uhura')
starTrekQ.enqueue('Sulu')
starTrekQ.enqueue('Checkov')
let testQ = new Queue()
peek(starTrekQ)
display(starTrekQ)
isEmpty(starTrekQ)
isEmpty(testQ)
remove(starTrekQ, 'Spock')
