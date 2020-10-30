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
        // console.log('Empty!')
        return true;
    }
    else {
        // console.log('Not empty!')
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

function squareDance(people){
    let spares = new Queue;

    people.map(person => {
        if(person[0] === 'M'){
            if(isEmpty(spares))
                spares.enqueue(person)
            else if(spares.first.value.slice(0, 2) === 'F '){
                console.log(`${person} + ${spares.dequeue()}`)
            }
            else    
                spares.enqueue(person)
            
        }
        else {
            if(isEmpty(spares))
                spares.enqueue(person)
            else if(spares.first.value.slice(0, 2) === 'M '){
                console.log(`${person} + ${spares.dequeue()}`)
            }
            else    
                spares.enqueue(person)
        }
    })

    console.log('\n')
    display(spares);

}

function bank(q) {
    console.log('FIRST', q)
    while (q.first) {
        let random = Math.floor(Math.random() * Math.floor(4));
        if (random === 0) {
            console.log(`Back of the line ${q.first.value}!`);
            q.enqueue(q.dequeue());
        }
        else {
            console.log(`Have a nice day! ${q.first.value}`);
            q.dequeue()
        }
    }
    return;
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
display(starTrekQ)
let newQ = remove(starTrekQ, 'Checkov');
display(starTrekQ)
// console.log(starTrekQ)

let peopleArray = [
    'F Jane', 
    'M Frank', 
    'M John', 
    'M Malik', 
    'F Madonna', 
    'M David', 
    'M Christopher', 
    'F Beyonce'
]

// squareDance(peopleArray);
// display(starTrekQ)

bank(newQ);
