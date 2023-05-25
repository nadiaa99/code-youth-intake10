for(let i=1;i<20;i++){
    console.log ("Nadia")
}
for(let i=1;i<=20;i++){
    console.log("ottawa")
}
for(let i=0; i<8;i++){
    console.log(i)
}
for(let i=2;i<=20;i+=2){
    console.log(i)
}


//4. program that prompts the user to input a positive integer. It should then print the multiplication table of that number. ex if the number is 5, 0 5 10 15 20 25 30 35 40 45 50

//5. If you haven't already, Make it so that the previous code will only run if the number inputed is positive.

//6. Create a loop that loops 100 times. Inside the loop check if the number of the loop is even or odd and console.log if it is or isn't

//7. Create a number guessing game that gives you 5 tries to guess the correct number.


// 1.

for(let i = 1; i <= 10; i++){
    console.log(i)
  }
  
  // 2.
  
  for(let i = 10; i >= 0; i--){
    console.log(i)
  }
  
  // 3.
  
  for(let i = 0; i < 5; i++){
    console.log('For loops are easy')
  }
  
  // 4. 5.
  
  let prompted = prompt('Pick a number');
  
  if(prompted >= 0){
  for(let i =0; i <= 10; i++){
    console.log(prompted * i)
  }
  }
  
  // 6.
  
  for(let i = 0; i <= 100; i++){
    if(i%2 == 0){
      console.log(i + ' is even')
    }else{
      console.log(i + ' is odd')
    }
  }
  
  // 7.
  
  let rng = Math.floor(Math.random()*10)
  
  for(let i = 0; i < 5; i++){
    let guess = prompt('Guess the number');
    if(guess == rng){
      console.log("CORRECT")
      break;
    }else{
      console.log("NOT CORRECT")
      if(rng < guess){
        console.log('guess lower')
      }else{
        console.log('guess higher')
      }
    }
  }