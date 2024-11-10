/****
 * fizz buzz
 * number -> 20
 * 1 ->20
 * if number divisble by 3 -> fizz
 * if number divisble by 5 -> buzz
 * number divisible by both -> fizzbuzz
 */

//this code is not correct because most specific condition should be on the top
// let target =20;
// for(let i=1;i<=target;i++){
//     if(i%3 == 0){
//         console.log(i,": fizz");
//     }
//     else if(i%5 == 0){
//         console.log(i,": buzz");
//     }
//     else if(i %3 == 0 && i%5 == 0){
//         console.log(i,": fizzbuzz");
//     }
//     else{
//         console.log(i);
//     }
// }

//corrected code
let target =20;
for(let i=1;i<=target;i++){
    if(i %3 == 0 && i%5 ==0){
        console.log(i,": fizzbuzz");
    }
    else if(i%3 == 0){
        console.log(i,": fizz");
    }
    else if(i%5 == 0){
        console.log(i,": buzz");
    }
    else{
        console.log(i);
    }
}

