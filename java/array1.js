let numbersArray = [ 98, 144, 364, 387, -31, 409,195, 300,  48,  28, 169, -11, -6, 183,  87, 383, 405,  31,185,  39];
console.log(numbersArray[4]);
console.log(numbersArray.length)
console.log(numbersArray)
let reverseArray = numbersArray.reverse();
console.log(reverseArray)
for(let i=0;i<=numbersArray.length;i++){
    if(numbersArray[i]%2==0) {
        console.log(numbersArray[i])
    }
    
}