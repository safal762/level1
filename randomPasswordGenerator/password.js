
let randomPass=''
document.querySelector('#generateBtn').addEventListener('click',function(){
   let length=Number(document.querySelector('#length').value  )
   randomPassword(length)
  document.querySelector('#password').value=`${randomPass}`
  if(randomPass!=''){
    randomPass=''
  }
  
})

function randomPassword(length){
    let  password="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?~`"
let minValue=0
let maxValue=92
 for(i=0;i<=length;i++){
        randomPass+=password[Math.floor(Math.random()*(maxValue-minValue)+minValue)]
    }
}