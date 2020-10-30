class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function peek(stack) {
    return stack.top.data;
}

function isEmpty(stack) {
    let isEmpty = false
    if (stack.top === null) {
        isEmpty = true;
    }
    return isEmpty
}

function display(stack) {
    let current = stack.top
    while (current !== null) {
        process.stdout.write(`${current.data} `)
        current = current.next
    }
    return;
}

function sortStack(stack){
    let sorted = new Stack();
    while(!isEmpty(stack)){
      let temp = stack.pop();
      while(peek(sorted) && temp < peek(sorted)){
        stack.push(sorted.pop())
      }
  
      sorted.push(temp)
    }
  
    console.log(sorted)
  }

function sortStack2(stack) {
    let stackA = stack;
    let stackB = [];
    while(stackA.length) {
        let temp = (stackA.pop());
        while (true) {
            if (!stackB.length || temp >= stackB[stackB.length - 1]) {
                stackB.push(temp);
                break;
            } else {
                stackA.push(stackB.pop());
            }
        }
    }
    return stackB;
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let splitString = s.split("")
    let newStack = new Stack();
    splitString.map(val => {
        newStack.push(val)
    })

    let joinArr = []
    let curr = newStack.top;
    while (curr) {
        joinArr.push(newStack.pop())
        curr = curr.next;
    }


    if (s === joinArr.join(""))
        return true;
    else
        return false;

}



function parenthesisFinder(s) {

    let splitString = s.split("")
    let newStack = new Stack();
    splitString.map(val => {
        newStack.push(val)
    })

    let open = false
    let close = false
    let current = newStack.top
    let location = 0;
    let count = 1;
    while (current.next !== null) {
        if (current.data === '(') {
            open = true;
            location = count;
        }
        if (current.data === ')') {
            close = true
        }

        current = current.next
        console.log(location)
        location++
    }

    if (open && close) {
        console.log('All good')
        return true
    } else if (open === true && close === false) {
        console.log('Missing closing parenthesis. Open parentheses at location '+ location)
        return false
    } else if (open === false && close === true) {
        console.log('Missing opening parenthesis')
        return false
    } else {

        console.log('no parenthesis detected')
        return
    }

}

function stackedQueue(stack) {
    let stackA = stack;
    let current = stackA.top;
    let stackB = new Stack();   
    display(stackA);
    while (stackA.top !== null ) {
        stackB.push(stackA.pop())        
        current.next;
    }
    console.log('\n')
    display(stackB);
}


let starTrek = new Stack();
starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')
starTrek.push('Josh')

// let testStack = new Stack()
// testStack.push(17)
// testStack.push(22)
// testStack.push(4)
// testStack.push(69)
// testStack.push(32)
// testStack.push(1)
// testStack2 = [2,7,1,8,9]
// console.log(sortStack2(testStack2))

stackedQueue(starTrek);





// console.log(starTrek)
// console.log(peek(starTrek));
// console.log(isEmpty(starTrek))
// display(starTrek)

// console.log(is_palindrome("dad")); //true
// console.log(is_palindrome("A man, a plan, a canal: Panama")); //true
// console.log(is_palindrome("1001"));  //true
// console.log(is_palindrome("Tauhida"));  //false
// parenthesisFinder('2 + 3( 5 + 4 + 4 4')
