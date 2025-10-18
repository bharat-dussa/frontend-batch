

function detectCycle(head) {
  let slow = head,
    fast = head;

  console.log("slow", slow.next, "fast", fast.next);

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

console.log(detectCycle([1, 2, 3, 4, 5, 3, 7, 8, 9, 10]));
