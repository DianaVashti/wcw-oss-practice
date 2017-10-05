export default class Queue {
  // start with this as the constructor of your Doubly-Linked-List class
  // do not edit:
  constructor() {
    this.size = 0
    this.elements = []
  }

  enqueue(elementToAdd) {
    this.elements.push(elementToAdd)
    this.size += 1
  }

  dequeue() {
    // returns and removes the front element in the queue or null if the queue is empty.
    this.size -= 1
    return this.elements.shift()
  }

  front() {
    // returns the front element in queue or null if the queue is empty.
    if(this.size < 1) return null
    return this.elements[0]
  }

  back() {
    if(this.size < 1) return null
    return this.elements[this.size-1]
  }

  isEmpty() {
    return this.size < 1 ? true : false
  }

  length() {
    return this.size
  }

}
