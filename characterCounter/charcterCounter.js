let charCount=0

document.querySelector('#text-input').addEventListener('input',function(e){
if(charCount<200){
    charCount=e.target.value.length
   document.querySelector('#char-count').textContent=`${charCount}`
}
})