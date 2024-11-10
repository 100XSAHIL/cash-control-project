/**
 * variable declaration
 * how js run the code
 * 
*/

console.log("Inside Intro");

//variable declaration
let varName;
//default value of a variable is undefined -->varName is a  variable that
//currently holds undefined 
// console.log("13",varName);
// //js -->numeric values
// varName =10;
// console.log("16",varName);
// varName =10.1;
// console.log("18",varName);


//in js we have only strings 
// let newVar;
// console.log("23",newVar);
// newVar="i am a string";
// console.log("25",newVar);

// //boolean
// newVar=true;
// console.log("29",newVar);


// //null(user defined),undefined --> non existence
// newVar=null;
// console.log(newVar);


/**
 * how to know the current type of value
 * the variable is having
 * there only  numbers
 * there only strings
 * what type of values it can have?
 *  #Primitive ->
 * -> number,boolean,strings,null,undefined
 *  ->BigInt,symbols
 *  #Non-Primtive ->
 *   ->functions,arrays and objects
*/


// varName = 10;
// varName ="hello";
// varName=true;
// varName=10.1;
// varName ="javascript m sirf string hoti h";
// varName ='s';
// console.log("57",varName);
// console.log(typeof varName);
// console.log(5/2);//o/p :-> 2.5

 
//conditionals ->if else and switch cases
// let number =10;
// if(number%2==0){
//     console.log("I am even");
// }
// else{
//     console.log("I am odd");
// }


//if there are lot of if elses ->> use switch case(industry recommended)

// let day ="mon";

// if(day == "mon"){
//     console.log("Working");
// }
// else if(day =="tue" ||  day =="wed" || day =="thurs" || day =="fri" ){
//     console.log("off day");
// }
// else if (day =="sat" || day=="sun"){
//     console.log("weekend");
// }
// else{
//     console.log("invalid day");
// }



// switch(day){
//     case "mon":
//         console.log("working");
//         break;
//     case "tue":
//     case "wed":
//     case "thurs":
//     case "fri":
//         console.log("off day");
//         break;

//     case "sat":
//     case "sun":
//         console.log("weekend");
//         break;
//     default:
//         console.log("Invalid day");
// }


//loops 
/****
 * while,for ,do while ,for each 
 */

// for(let num=1;num<=10;num++){
//       console.log("number is:",num);
// }

/***
 * 
 * functions -> reusable block of code create
 */


// let number =10;
// if(number%2==0){
//     console.log("I am even");
// }
// else{
//     console.log("I am odd");
// }

// console.log("hello");

// function fn (){
//     console.log("function se hello");
// }

// fn();
// console.log("hello again");


// function fn(a,b){
//     console.log("a:",a);
//     console.log("b:",b);
// }

// fn("hello","world");
// fn(10,20);



// function fn(a,b){
//     let d = a+b;
//     return d;
// }

// let res =fn(10,20);
// console.log("res is:",res);



/***
 * strings:how strings work in js
 * concatenation : appending  a value to a string
 */


//there is no diff betn double and single quotes
// let string1 ="I am a string";
// let string2 ='I am a string';
// let templateString=`i am also a string
// but can be multiple lines`;
// backtick
// console.log(string1);
// console.log(string2);   
// console.log(templateString);    


//string concatenation

function greet(firstVar){
    console.log("Hi " + firstVar + "!");
    console.log('Hi ' + firstVar + '!');
   console.log(`Hi ${firstVar}!`);
}
let firstName ="Sahil";
greet(firstName);

