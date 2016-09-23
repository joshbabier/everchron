// JS implementation of binary search algorithm
module.exports = function(arr, val) {

    // Iterative method to search an array
    var search = function() {
        var mid;
        var left = 0;
        var right = arr.length - 1;

        while (right >= left) {
            mid = Math.floor(0.5 * (left + right));

            if (arr[mid] < val) {
                // Next iteration, search right side
                left = mid + 1
            }
            else if (arr[mid] > val) {
                // Next iteration, search left side
                right = mid - 1
            }
            else {
                // Found it!
                return mid
            }
        }

        // Not found
        return -1
    };

    return search(arr)
};
