

// // user input values for registration of CNIC or Bform
// let userName = prompt("Enter your full name");
// let userTokenNum = +prompt("Enter your token number");
// let userGender  = prompt("Enter your Gender");
// let userAge = +prompt("Enter your age");
// let userPakNationality = prompt("Are you pakistani, please give answer in yes or no");

// // checking of users details on behalf requirment

// if(userAge >= 18 && userPakNationality === "yes"){
//     console.log("You are eligible for registration of CNIC");

// }
// else if( userAge < 18 && userPakNationality === "yes"){
//     console.log("You are eligible for registration of BFORM");
// }
// else{
//     console.log("Your are not eligible for both program")
// }

// console.log("Here is your details : \n Name "+userName+"\n Token Numer "+userTokenNum+"\n Gender "+userGender+"\n Age "+userAge+" \n Is Pakistani "+userPakNationality);


// checking the user input and computer random number are equal or not on different condition

//1.  checking user input equal to computer random number

// let userGuess = +prompt("Enter number between 0 - 9 to guess the computer random number");
// let compRandNum = Math.round(Math.random()*10);

// if( userGuess === compRandNum){
//     console.log("Congratultaions, you have guessed correct number : \n correct number" +compRandNum);
//     document.write("Congratultaions, you have guessed correct number : \n correct number" +compRandNum)
// }
// else{
//     console.log("Unfortunately, you have guessed wrong number : \n correct number " +compRandNum);
//     document.write("Unfortunately, you have guessed wrong number : \n correct number " +compRandNum);
// }

// 2. calculator application 

let mathOperation = prompt("Write '+' for addition, '-' for subtraction, '*' for multiplication, '/' for divsion and '%' for modulus");
let UserEntry1 = +prompt("please enter the number");
let UserEntry2 = +prompt("please enter the number");

if (mathOperation === "+"){
    console.log(UserEntry1 + UserEntry2);
}

else if (mathOperation === "-"){
    console.log(UserEntry1 - UserEntry2);
}

else if (mathOperation === "*"){
    console.log(UserEntry1 * UserEntry2);
}

else if (mathOperation === "/"){
    console.log(UserEntry1 / UserEntry2);
}
else{
    console.log(UserEntry1 % UserEntry2);
}