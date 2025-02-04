function objectToArray(obj) {
   let a= Object.entries(obj);
    return a;
}
console.log(objectToArray({ a: 1, b: 2, c: 3 }));
// Output: [["a", 1], ["b", 2], ["c", 3]]
