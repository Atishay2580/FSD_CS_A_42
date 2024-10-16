// Map
const myMap = new Map([
    [1,"one"],
    [2,"two"],
    [3,"three"],
]);

console.log(myMap.get(2));
myMap.set(4,"four")
console.log(myMap.get(4));


// Set
const mySet = new Set();
mySet.add(2)
mySet.add(21)
mySet.add(13)
mySet.add(21)
mySet.add(4)
mySet.add(2)

console.log(mySet);


// WeakMap
const myWeakMap = new WeakMap();

// WeakSet
const myWeakSet = new WeakSet();