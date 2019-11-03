// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a factor, output 'Pling'.
// If the number contains 5 as a factor, output 'Plang'.
// If the number contains 7 as a factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string. 
//number % 3 !==0 && number % 5 !==0 && number % 7 !==0


// let number ;


function factorOfNumbers(number){
let string = "";

if (number % 3 !==0 && number % 5 !==0 && number % 7 !==0){
 string = "Ops! Raindrop-speak doesn't know what to make of that" 
}   
if(number % 3 ===0){
(string += "Pling");
}
 if( number % 5 === 0){
(string += "Plang"); 
}
 if( number % 7 === 0){
(string += "Plong");  
};
return string; 
}


console.log (factorOfNumbers(28));
console.log (factorOfNumbers(1755));
console.log (factorOfNumbers(9));
console.log(factorOfNumbers(34));
console.log(factorOfNumbers(15));
// document.getElementById("myBtn").onclick((handleClick(e)));
// click(()=> handleClick());
function handleClick(){
    // document.write(factorOfNumbers());
    let userInput = parseInt(document.getElementById("numberTyped").value);
    document.getElementById("factorOfNumbers").innerHTML = factorOfNumbers(userInput);
    console.log(document.getElementById("numberTyped").value);

}
function handleInput(e){
console.log(e);
}