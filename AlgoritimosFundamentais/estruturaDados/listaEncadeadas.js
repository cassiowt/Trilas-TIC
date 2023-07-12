function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.append = function(value) {
    var newNode = new Node(value);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

LinkedList.prototype.prepend = function(value) {
    var newNode = new Node(value);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
}

LinkedList.prototype.delete = function(value) {
    if (!this.head) {
        return;
    }

    while (this.head && this.head.value === value) {
        this.head = this.head.next;
    }

    var currentNode = this.head;
    while (currentNode.next) {
        if (currentNode.next.value === value) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }

    if (this.tail.value === value) {
        this.tail = currentNode;
    }
}

LinkedList.prototype.print = function() {
    var currentNode = this.head;
    var values = [];
    while (currentNode) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
    }
    console.log(values.join(' -> '));
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();  // Saída: 1 -> 2 -> 3
list.prepend(0);
list.print();  // Saída: 0 -> 1 -> 2 -> 3
list.delete(2);
list.print();  // Saída: 0 -> 1 -> 3

const soma = (a,b) => {
    let s = a + b;
    return s;
}
