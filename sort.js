// JS implementation of merge sort algorithm
module.exports = function(arr) {

    // Recursive method to sort an array
    var msort = function(arr) {
        // Base case
        if (arr.length <= 1) { return arr }

        var left = [];
        var right = [];

        // Split the array in two by even and odd index
        for (var i=0; i <arr.length; i++) {
            if ((i+2) % 2 ==0) {
                left.push(arr[i])
            }
            else {
                right.push(arr[i])
            }
        }

        // Recursive calls
        left = msort(left);
        right = msort(right);

        return merge(left, right)
    };

    // Walks two sorted arrays and compares them, element by element.
    var merge = function(left, right) {
        // Exit early if all the values in one side are less than all
        // the values in the other side
        if (left[left.length-1] <= right[0]) { return left.concat(right) }
        if (right[right.length-1] <= left[0]) { return right.concat(left) }

        var result = [];

        while (left.length > 0 && right.length > 0) {
            if (left[0] <= right[0]) {
                result.push(left.shift())
            }
            else {
                result.push(right.shift())
            }
        }

        // Deal with any leftover elements.
        while (left.length > 0) { result.push(left.shift()) }
        while (right.length > 0) { result.push(right.shift()) }

        return result
    };

    return msort(arr)
};
