let randomNumber=Math.floor(Math.random()*100 + 1)
let attemps=0
let playgame=true
let previousNumber=[]
let previousNumberindex=0
    document.querySelector('.guess-btn').addEventListener('click',function(){

if(playgame==true){
    let number=parseInt(document.querySelector('input').value)
strictCheck(number)
}
})

document.querySelector('.restart-btn').addEventListener('click',startGame)


function checkValue(number){
    if(number==randomNumber){
        message(`you guessed the number ${randomNumber}`)
        counter(number)
        endGame()
    }else if(number<randomNumber){
         message('number is too low')
         counter(number)
    }else{
        message('number is too high')
        counter(number)
    }
   
}

function message(message){
    document.querySelector('.message').textContent=message
}

function strictCheck(value){
    if(value==='' || isNaN(value)){ // the value of empty string is 0
        message('enter the correct value')
    }else if(value>100){
        message(`enter the number less than 100`)
    }
    else if(value<1){
        message(`enter the number greater than 0`)
    }
    else{
        checkValue(value)
    }
}

function counter(value){
    attemps+=1
    previousNumber.push(value)
    document.querySelector('input').value=''
    document.querySelector('.stats').innerHTML=`<span>Attempts:${attemps}</span>`
     document.querySelector('.previous span').textContent+=` ${previousNumber[previousNumberindex]}`
    previousNumberindex+=1
  
    if(attemps>=10){
        message(`the number was ${randomNumber}`)
        endGame()
    }
}

function endGame(){
    document.querySelector('input').disabled=true
    playgame=false
}

function startGame(){
    document.querySelector('input').disabled=false
    playgame=true
    attemps=0
    previousNumber=[]
    previousNumberindex=0
    document.querySelector('.stats span').textContent=''
    document.querySelector('.previous span').textContent=''
     randomNumber=Math.floor(Math.random()*100 + 1)
    message('Enter a number to start!')
}