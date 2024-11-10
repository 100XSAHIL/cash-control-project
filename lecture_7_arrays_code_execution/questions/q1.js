function advancedManipulation(words){
   let firstWord =words.shift();
   words.unshift("new");
   words.unshift(firstWord);

   //remove
   words.splice(2,1);

   //join 
  let joinedStr = words.join(",");

  return joinedStr;

}




let words = ["apple", "banana", "cherry", "date"];
let result = advancedManipulation(words);
console.log(result); // Output: "apple,new,cherry,date"

