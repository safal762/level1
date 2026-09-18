
function randomColor(){
    let hex='0123456789ABCDEF'
    let color='#';
    for(i=0;i<6;i++){
       color+=`${hex[Math.floor(Math.random()*16)]}`
    }
    return color
}
let stat = document.querySelector('.reponse h2 span')
let colors=document.querySelector('.reponse p span')

let interval

function changeColor(){
   
   interval= setInterval(function(){
        document.body.style.backgroundColor=randomColor()
        colors.innerHTML=`${ randomColor() }`   
    },1000)
     stat.style.color='#10B981'
    stat.innerHTML='CHANGING...'
    
}
function stopColorChange(){
    clearTimeout(interval)
    stat.style.color='#C95B78'
    stat.innerHTML='STOPPED'
}
document.querySelector('#startColor').addEventListener('click',function(){
        changeColor()

})

document.querySelector('#stopColor').addEventListener('click',function(){
     stopColorChange()
})