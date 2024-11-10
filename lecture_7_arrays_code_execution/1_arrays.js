/***
 * arrays
 * arrays in js dont have a strict size
 * -> add,remove elements from it
 */

let arr=[1,2,3,4];
let arr2=[];


//print
// console.log("empty arr:",arr2);
// console.log("arr is",arr);

//iterate
// for(let i=0;i<arr.length;i++){
//     console.log("index: ",i,"value: ",arr[i]);
// }

/**************IMPORTANT METHODS*********
 * add last -> push
 * remove last -> pop
 * add first ->unshift
 * remove first -> shift
 * 
 */

// 1. push() -> add element at the end of the array
arr.push(50);
// console.log("after push",arr);
// 2.pop() ->remove element from the end of the array
// arr.pop();
// console.log("after pop",arr);
// 3. unshift -> add element at the start of the array
arr.unshift(5);
// console.log("after unshift",arr);
// 4. shift() -> remove element from the start of the array

// arr.shift();
// console.log("after shift",arr);
console.log(arr);

//5. slice - input ->start index,end index
//slice a copy of the array from sidx to edix -1

// let slicedArr =arr.slice(0,4);
// console.log("sliced arr:",slicedArr);
// console.log("original arr:",arr);

// 6. splice ->input -> start index,delete count 
// splice original array m se element remove kar deta hain
// const spliedArray =arr.splice(3,2);
// console.log("removed elements",spliedArray);
// console.log("after splice",arr);

// 7.indexOf -> find the index of  the element in the array 
// console.log("index of 5",arr.indexOf(5));
// console.log("index of 30",arr.indexOf(30));

//8. includes
// console.log("is element  present ",arr.includes(30));
 

//9. join - join the array elements with the specified separator
// let fruits =["apple","oranges","banana"];
// let str =fruits.join("#");
// console.log("string is:",str);   


// function advancedManipulation(words){
//     let firstWord =words.shift();
//     words.unshift("new");
//     words.unshift(firstWord);
 
//     //remove
//     words.splice(2,1);
 
//     //join 
//    let joinedStr = words.join(",");
 
//    return joinedStr;
 
//  }
 
 
 
 
//  let words = ["apple", "banana", "cherry", "date"];
//  let result = advancedManipulation(words);
//  console.log(result);  