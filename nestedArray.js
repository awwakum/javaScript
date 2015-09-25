//Flatten a nested array. You must account for varying levels of nesting.
function steamroller(arr) {
    
    function isArr(elem) {
        return Array.isArray(elem);
    }
    
    do {
        //apply method of concat take the second parameter as an array
        arr = [].concat.apply([], arr);
    } while (arr.some(isArr)); 
        
        
    console.log(arr);
    return arr;
}

steamroller([1, [2], [3, [[4]]]]);
steamroller([[['a']], [['b']]]);
steamroller([1, [], [3, [[4]]]]);
steamroller([1, {}, [3, [[4]]]]);
