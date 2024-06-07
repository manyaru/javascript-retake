function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}


console.log(filterArray([1, 2, 7, 3, 4], num => num > 2));  
