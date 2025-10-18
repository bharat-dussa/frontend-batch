function maxEvents(events: number[][]): number {
    events.sort((a, b) => a[0] - b[0]);
    const heap: number[] = [];
    let i = 0, day = 0, count = 0;
  
    const push = (x: number) => {
      heap.push(x);
      heap.sort((a, b) => a - b); // maintain min-heap
    };
    const pop = () => heap.shift();
  
    while (i < events.length || heap.length > 0) {
      if (heap.length === 0) {
        day = events[i][0]; // jump to next event start
      }
  
      // add all events starting today
      while (i < events.length && events[i][0] <= day) {
        push(events[i][1]);
        i++;
      }
  
      // remove expired events
      while (heap.length && heap[0] < day) {
        pop();
      }
  
      // attend one event
      if (heap.length) {
        pop();
        count++;
        day++;
      }
    }
  
    return count;
  }
  


  console.log('maxEvents', maxEvents([[1,2],[2,3],[3,4]]));