// program # 1

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
if(num1>num2){
    console.log("First numer is greater" +num1);
}
else{
    console.log("Secomd is greater" +num2);
}

// Program # 2
let num_1 = +prompt("Enter any number");
if(num_1 >= 0){
    alert("The sign is +")
}
else{
    alert("The sign is -")
}


//Program # 3
let number1 = +prompt("Enter first number");
let number2 = +prompt("Enter second number");
let number3 = +prompt("Enter third number");
let number4 = +prompt("Enter fourth number");
let number5 = +prompt("Enter fifth number");
if (number1 > number2 && number1 > number3 && number1 > number4  && number1 > number5)
{
    console.log("First number is greater")
}
else if (number2 > number1 && number2 > number3 && number2 > number4  && number2 > number5){
    console.log("second number is greater");
}
else if (number3 > number1 && number3 > number2 && number3 > number4  && number3 > number5){
    console.log("Third number is greater");
}
else if (number4 > number1 && number4 > number2 && number4 > number3  && number4 > number5){
    console.log("Fourth number is greater");
}
else{
    console.log("Fifth number is greater");
}

// Program # 4
let num=1;
for(num; num<=15; num++){
    if(num % 2 === 0){
        console.log(num," is even");
    }
    else{
            console.log(num," is odd"); 
        }
}

// Program # 5
let avgMark = +prompt("Enter your average mark ");
if ( avgMark < 100 && avgMark >= 90){
    console.log("You have got 'A' grade")
}
else if ( avgMark <= 90 && avgMark >= 80){
    console.log("You have got 'B' grade")
}
else if ( avgMark < 80 && avgMark >= 70){
    console.log("You have got 'c' grade")
}
else if ( avgMark < 70 && avgMark >= 60){
    console.log("You have got 'D' grade")
}
else{
    console.log("You have got 'F' grade")
}

// Program # 6 

for(let num = 1; num<=100; num++){
    if(num%3 === 0 && num%5 != 0){
        console.log("Fizz");
    }
    else if(num%5 == 0 && num%5 != 0){
        console.log("Buzz");
    }
    else if(num%5 === 0 && num%5 === 0){
        console.log("FizzBuzz");
    }

}

//Program # 7
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        console.log("*");
    }
    console.log("\n")
}
