let array = ["Red", "Blue", "Green", "Black", "Purple", "Pink", "White", "Brown", "Yellow", "Violet"]

for(let i=0; i<array.length; i++)
{
    console.log(array[i])
}

//ALTERNATIVE WAY
// For in: loop to show array
for(let i in array){
    console.log(array[i])
}

// For of: loop to show array
for(let item of array){
    console.log(item)
}

//Practise:
//For of
let index = 1;
for(let item of array)
{
    console.log(index + ". " + item)
    index++;
}

//For in
for(let i in array)
{
    console.log(`${parseInt(i)+1}. ${array[i]}`);
}

//Question: ["apple", "mango", 1, "grapes", "banana"] print before 1

let fruits = ["apple", "mango", 1, "grapes", "banana"]

for(let item of fruits){
  if (item == 1)
  break;
  console.log(item)
}

let i = 0;
while(fruits[i] != 1){
  console.log(fruits[i]);
  i++;
}

let a = 5;
let b = a;

a = 10;
console.log(a + b);


let arr = [1, 2, 3];
let arr2 = arr;

arr[1] = 10;

console.log(arr);
console.log(arr2);


//String
let str = "Hello World"
console.log(str)
console.log(str.length)
console.log(str.slice(0, 5))
console.log(str.substr(0, 10))
console.log(str.concat(" Universe"))
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.trim())         //removes whitespaces from front/back of words
console.log(str.split(" "))     //uses " " to split and form array
console.log(str.split("r"))     //use "r" to split and form array


let names = "ram, shyam, hari";
let nameList = names.split(",");

for(let nme of nameList)
{
    console.log(nme.trim())
}


function wordCount()
{
    let input = document.getElementById("my-text").value;
    input = input.trim()
    let words = input.split(" ")

    let count = 0;
    
    for(let item of words){
        if(item != "")
            count++
    }
    
    document.getElementById("result").innerHTML = `Total Words: ${count}`
}