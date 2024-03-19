class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(front = null) {
    this.front = front;
    this.rear = front;
  }

  // ADD NODE TO BACK OF QUEUE
  // USE DATA TO CREATE A NEW NODE AND ADD IT TO THE QUEUE
  enqueue(data) {
    let insertedNode = new Node(data);
    if (!this.front) {
      this.front = insertedNode;
    }
    if (this.rear) {
      this.rear.next = insertedNode;
    }
    this.rear = insertedNode;
  }

  // REMOVE NODE FROM FRONT OF QUEUE AND RETURN IT
  dequeue() {
    let nodeToRemove = this.front;
    if (this.front === this.rear) {
      this.rear = null;
      this.front = null;
    }
    if (this.front) {
      this.front = this.front.next;
    }
    return nodeToRemove;
  }

  // RETURN NODE AT FRONT WITHOUT REMOVING IT
  peek() {
    return this.front;
  }

  // RETURN TRUE IF QUEUE IS EMPTY, OTHERWISE FALSE
  isEmpty() {
    return !(!!this.front);
  }

  // RETURN NUMBER OF NODES IN QUEUE, E.G. 10
  size() {
    if (this.isEmpty()) {
      return 0;
    }
    let count = 1;
    let currentNode = this.front;
    while (currentNode.next) {
      count++;
      currentNode = currentNode.next;
    }
    return count;

  }

  // RETURN INTEGER REPRESENTING HOW FAR TARGET IS FROM FRONT OF QUEUE
  // IF TARGET ISN'T IN QUEUE, RETURN -1
  search(target) {
    if (this.isEmpty()) {
      return -1;
    }
    if (this.front.data === target) {
      return 0;
    }
    let count = 1;
    let currentNode = this.front;
    while (currentNode.next) {
      if (currentNode.next.data === target) {
        return count;
      }
      count++;
      currentNode = currentNode.next;
    }
    return -1;

  }
}

if (require.main === module) {
  // add your own tests in here

}

module.exports = {
  Node,
  Queue
};

// Write your Big O findings here

// Optional: Please add your pseudocode to this file
// Optional: And a written explanation of your solution
