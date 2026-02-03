let score = 33;

console.log(typeof score);

let score1 ="33";
console.log(typeof score1);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let score2 = undefined
console.log(typeof score2);
let valueInNumber1 = Number(score2)
console.log(valueInNumber1);

// 33 => 33
// 33abc => NaN (not a number)
// true => 1 ; false => 0

let isloggedIn = 1

let booleanIsLoggedIn= Boolean(isloggedIn);
console.log(booleanIsLoggedIn)

// 1=> true
// 0 => false
//"" => false
//"Poulami" =>true

let someNumber =33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log( typeof stringNumber);