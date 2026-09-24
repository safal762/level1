let calculate
document.querySelector('.btn-tip').addEventListener('click',function(e){
calculateTip(e.target.value)
})
function calculateTip(value){
    calculate=value
     if(calculate==10){
            let amount=document.querySelector('.input-field').value
        console.log(  people())
     }
        
        
}
function people(){
    let numOfPerson=document.querySelector('.people-input').addEventListener('input',function(e){
       return e.target.value
    })
        
}
