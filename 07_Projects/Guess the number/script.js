//First we generate a random no.
let randomNO=(parseInt(Math.random()*100+1));

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p = document.createElement('p')//used later to display restart message.
let prevGuess = []//keeps track of all the guesse  made by the user
let numGuess = 1 //count the attempts.

let playGame=true //if game is active click "Submit button triggers".
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()//stop page refresh
        const guess=parseInt(userInput.value)//read user input value
        validateGuess(guess)//passes it to validateGuess.
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1){
        alert('Please enter a  number more than 1')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess) //If no is valid added the guess to the previous guess.
        if(numGuess===11){
          displayGuess(guess)
          displayMessage(`Game Over.Random no was ${randomNO}`)
          endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
   if(guess === randomNO){ //if guess match ->Sucess match and game end().
      displayMessage(`You guessed it right`)
      endGame()
   }else if(guess < randomNO){
      displayMessage(`Number is To low`)
   }else if(guess>randomNO){
    displayMessage(`Number is Too High`)
   }
}
function displayGuess(guess){
  userInput.value=''
  guessSlot.innerHTML +=`${guess}  `
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
 userInput.value=''
 userInput.setAttribute('disabled','')
 p.classList.add('button')
 p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
 startOver.appendChild(p)
 playGame=false
 newGame();
}
function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
   randomNumber=parseInt(Math.random()*100+1);
   prevGuess=[]
   numGuess=1
   guessSlot.innerHTML=''
   remaining.innerHTML=`${11-numGuess}`
   userInput.removeAttribute('disabled')
   startOver.removeChild(p);
   playGame=true;
})
}