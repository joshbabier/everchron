module.exports = function(arr) {
    var flattened = [];

    var flatten = function(arr) {
        if (! Array.isArray(arr)) {
            flattened = arr;
            return
        }

        arr.forEach(function(element) {
            if (Array.isArray(element)) {
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
