const randomNumber = parseInt(Math.random()*100+1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainig = document.querySelector('.lastresult')
const lowOeHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p=document.createElement('p')
