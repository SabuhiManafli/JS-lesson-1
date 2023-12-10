
let a = 5;
let b = 10;

// !Method I

a = a + b
b = a - b
a = a - b

// ! Methdo II

// [a, b] = [b, a]

// ! Method III

// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

console.log(a, b);


// ? My age

function fullDate (dateNow, dateBirth) {
    let result = dateNow - dateBirth; 
    console.log (result);
}
fullDate(2023,1994)

// ? Falçı

let x = "FrontEnd Developer";
let y = "Baku";
let z = "Turac";
let n = 1;

let future = `You will be a ${x} in ${y}, and married to ${z} with ${n} kids.`;

console.log(future)
