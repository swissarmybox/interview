const hasCycle = function (head) {
  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};

module.exports = { hasCycle };
