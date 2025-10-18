function maxEvents(events) {
    events.sort(function (a, b) { return a[0] - b[0]; });
    let heap = [];
    let i = 0, day = 0, count = 0;
    let push = function (x) {
        heap.push(x);
        heap.sort(function (a, b) { return a - b; }); // maintain min-heap
    };
    let pop = function () { return heap.shift(); };
    
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
console.log('maxEvents', maxEvents([[1, 2], [2, 3], [3, 4]]));
