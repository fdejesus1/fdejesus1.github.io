$(document).ready(function(){
  var randomNumber = Math.floor((Math.random() * 100) + 1);//find a way for the program to choose a random number between 1 and 100, save this as a variable
  var guess_counter = 0 
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
   var userGuess =  parseInt ($('input').val()); //save their guess as a variable
    console.log(userGuess);
    guess_counter = guess_counter + 1 //changes the guess_counter by 1 every guess
    console.log(guess_counter)// just checking if the guess_counter was working
    $("#guess_counter").text(guess_counter + " guesses so far") //shows how many guesses the user has so far

    if (userGuess==randomNumber){
      alert("You Guess Right")//alerts the user that he was correct in the guess
    } else if (userGuess > randomNumber ){// checks if the guess is higher that the number selected and tells the user to guess lower
      alert("Guess Lower")
    } else if(userGuess < randomNumber){// checks if the guess is lower that the number selected and tells the user to guess higher
      alert("Guess Higher")
    }
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    
      //what happens if the guess is correct?
      
    // if ( randomNumber > userGuess){
    //   console.log("Too Low. Guess Higher")
    // }//if the user guessed too high...
    // else if  {
    //   console.log("Too High. Guess Lower")
    // }
    // else(randomNumber = userGuess) {
    //   console.log("You Guessed It Right")
    // }
    //   //update the 'feedback' paragraph to tell them to guess lower
      
    // //otherwise, the user guessed too low...
    
    //   //update the 'feedback' paragraph to tell them to guess higher
    
  });
});
