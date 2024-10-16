const arr = [1,2,3,4,5,6,7,8,9,]
console.log(arr.filter((num) => num > 5).map((num) => num + 1));
console.log(arr.map((num) => num * 2));
console.log(arr.reduce((num,sum) => num + sum));

