// addition of two number
// let num1 = 10;
// let num2 = 20;
// function add(){
//     console.log( num1 + num2);
// }
// add();

// function add(a,b){
//    return a+b;
// }
// function sub(a,b){
//     return a-b;
//  }
//  function mul(a,b){
//     return a*b;
//  }
//  function div(a,b){
//     return a/b;
//  }
 
//  addVar = add(10,40);
//  subVar = sub(30,10);
//  mulvar = mul(40,20);
//  divVar = div(100,20);
//  console.log("Addition : "+addVar+"\nSubtraction : "+subVar+"\nMultiplication : "+mulvar+"\nDivision : "+divVar);

// function  writeData(num,times){
//     console.log(num,times);
//       if (times>0){
//         writeData(num,times-1);
//       }
// }
// writeData("hello", 5);

// function factorial(num){
//      if(num > 1){
//       let a = factorial(num-1);
//        return num * a;
//      }
//      return 1;
// }

// console.log(factorial(5))

// let abc = 7; // Global Scope
// function print (def) {
//     //  def = local scope
//     return function (ghi) { // anonymous function
//         console.log(def + ghi)
//     }
// }

// let innerFunction = print(7);
// let innerFunction2 = print(8);
// innerFunction(7);
// innerFunction2(5);

// let num = +prompt("Enter number to find sqaure of it")
// function squareFunction(num2){
//     return function(sqRoot){
//       console.log(num2 * sqRoot);
//     }
// }
// let innerFunction = squareFunction(num);
// innerFunction(num);

// let num = +prompt("Enter number to find sqaure of it")
// function squarefun(){
//   return num**2;

// }
// console.log(squarefun(num));


// function saveUrl (url) {
//     return function () {
//         fetch(url)
//             .then(response => response.json())
//             .then(json => console.log(json))
//     }
// }
// // SAVE URL 
// let makesRequest = saveUrl("https://jsonplaceholder.typicode.com/todos");

// // Request attempt
// makesRequest();
// makesRequest();