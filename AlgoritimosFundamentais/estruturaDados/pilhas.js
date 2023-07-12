function Stack() {
    this.elements = [];
}

Stack.prototype.push = function(element) {
    this.elements.push(element);
}

Stack.prototype.pop = function() {
    return this.elements.pop();
}

Stack.prototype.peek = function() {
    if (this.isEmpty()) {
        return null;
    } else {
        return this.elements[this.elements.length - 1];
    }
}

Stack.prototype.isEmpty = function() {
    return this.elements.length === 0;
}

const  stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());  // Saída: 3
console.log(stack.peek());  // Saída: 2
console.log(stack.isEmpty());  // Saída: false

const b = () => {
  
}

