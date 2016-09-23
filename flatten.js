// Flattens an array composed of any depth of nested arrays or other elements
module.exports = function(arr) {
    var flattened = [];

    // Recursive method to flatten an array
    var flatten = function(arr) {
        // Base case
        if (! Array.isArray(arr)) {
            flattened = arr;
            return
        }

        arr.forEach(function(element) {
            if (Array.isArray(element)) {

                // Recursive call
                flattened.concat(flatten(element))
            }
            else {
                flattened.push(element)
            }
        });

        return flattened
    };

    console.log(flatten(arr))
};
