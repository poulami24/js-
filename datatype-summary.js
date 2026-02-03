// primitive

// 7 types : String,Number,Boolean,null,
 //   undefined , Symbol , BigInt

  const score =100
 const scoreValue=100.3
 const isloggedIn = false
 const outsideTemp =null
 let userEmail;
 const id= Symbol('123')
 const anotherId=Symbol('123')

 console.log(id == anotherId);

 //const BigNumber=21354478963448n

 //reference or non primitive

 // Array, Objects, Functions
 
 const heros =["shakhtiman" , "spiderman" , "naagraj" ,"doga"]

 let myObj = {
    name: "Poulami",
    age: 21,

 }

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof  BigNumber);
console.log(typeof outsideTemp );
console.log(typeof scoreValue );
console.log(typeof myFunction );
console.log(typeof id );

 //javascript is the dyanamically type not static 

 