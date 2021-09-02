var swapPairs = function(head) {
    let node = head;
    let prev = null
    let point = null

    while (node && node.next) {
        point = node.next
        node.next = point.next
        if (!prev) {
            prev = node
            node = node.next
        } else {
            prev.next = point
        }
    }
    return head;
}