// Find a union b
let a = [1,2,3,4,5]
let b = [4,5,6,7,8]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)

// Find a intersection b

let a = [1,2,3,4,5]
let b = [3,4,5,6,7,8,9]

let A = new Set(a);
let B = new Set(b);

let c = a.filter((num) => B.has(num));
let C = new Set(c);
console.log(C)

// Find a with b

