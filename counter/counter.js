let count=0
function increase(){
     count=count+1
    document.querySelector('#count').innerHTML=`${count}`
}
function decrease(){
     count-=1
     document.querySelector('#count').innerHTML=`${count}`
}
function reset(){
    count=0
    document.querySelector('#count').innerHTML=`${count}`


}
document.querySelector('.increase').addEventListener('click',increase)
document.querySelector('.decrease').addEventListener('click',decrease)
document.querySelector('#reset').addEventListener('click',reset)

