// // program # 1

// function add(num1) {
//     return function (num2) {
//         return num1 + num2
//     }
// }
// let addfunc = add(10);
// console.log(addfunc(5));

// Program # 2 Recursive function to find specific number in given array if found return true if not then return false

// let arr = [2, 43, 24, 6, 3, 62, 53]

// function findNum(num, times) {

//     if (times > 0) {
//         findNum(num, times - 1);
//         if (arr[times] === num ) {
//             console.log("yes")

//         }
    
//     else {
//         console.log("no")
//     }
// }
// }
// findNum(53, arr.length);


// Program # 3

// let tag = document.createElement("p");
// function addText(para){
//         tag.innerHTML = para;
//         document.body.appendChild(tag)
// }
// addText("This is second paragraph of html document");



// Program # 4

// let listTag = document.createElement("li");
// function addTextList(listTag, newtext){
//         listTag.innerHTML = newtext;
//         document.body.appendChild(listTag)
// }
// addTextList(listTag,"This is text of first unordered list");



// Program # 5
// let para1 = document.getElementById("para-1")
// function changBackround (paraTag1, backgroundcolor){
//     paraTag1.style.background = backgroundcolor;
//  }
// changBackround(para1,"#87CEEB");

// Program # 6

let myObj = {
        name : "Raheel",
        age : 24,
        course : "JavaScript",
        instructor : "Sir Ishaq"
}
// function saveObj(key, objparameter){
//     localStorage.setItem(key, objparameter);
// }
// saveObj(myObj.name,myObj);
// saveObj(myObj.age,myObj);
// saveObj(myObj.course,myObj);
// saveObj(myObj.instructor,myObj);

// Program # 7

function saveObj(key, objparameter){
 let  obj = localStorage.getItem(key, objparameter);
}
saveObj(myObj.name,myObj);
saveObj(myObj.age,myObj);
saveObj(myObj.course,myObj);
saveObj(myObj.instructor,myObj);
console.log(obj)