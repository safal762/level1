let hour=true
let interval24
let interval12
function digital(){
   if(hour==true){
     interval24=setInterval(function(){
         let time= new Date()
        
    document.querySelector('.time h1').innerHTML=`${time.toLocaleTimeString('en-GB',{hour12:false})}` // en-GB removes AM/PM and toLocalString prints only time
    },1000)
   }
     else{
        interval12=setInterval(function(){
            let newTime= new Date()
       document.querySelector('.time h1').innerHTML=`${newTime.toLocaleTimeString('en-US', {hour12:true})}`
    },1000)
     }
}

function day(){
    let days= new Date()
    let currentDate=days.toLocaleDateString('en-US',{
        month:'long',
        weekday:'long',
        day:"numeric",
        year:'numeric'
    })
  document.querySelector('.time h2').innerHTML=`${currentDate}`
}

day()

let check=document.querySelector('.right .formate-change')
check.addEventListener('click',function(){
    if(check.textContent == '24H'){
        check.textContent='12H'
         hour=false
         clearInterval(interval24)
          digital()
    }
    else{
        check.textContent='24H'
         hour=true
         clearInterval(interval12)
                 digital()
    }
})
