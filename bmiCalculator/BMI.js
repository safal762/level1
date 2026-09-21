
        let heightError=document.querySelector('.height-error')
        let weightError=document.querySelector('.weight-error')
        let calculateBMI=document.querySelector('.result h1')
        let hError=false
        let wError=false
        let calculate=true
    
    document.querySelector('.calculate-bmi').addEventListener('click',function(e){
        e.preventDefault()
        valueCheck()
    })
    document.querySelector('.reset').addEventListener('click',reset)
    function valueCheck(){
   let height=document.querySelector('.height') 
        let weight=document.querySelector('.weig')
        
         let heightValue=Number(height.value)
          let  weightValue=Number(weight.value)
        console.log(typeof heightValue)
        if(heightValue<0  || heightValue==''){
            heightError.textContent='enter the correct height'
            calculate=false
            hError=true
        } else if(weightValue<0  || weightValue==''){
          weightError.textContent='enter the correct weight'
          calculate=false
          wError=true
        }else{
               
            BMI( heightValue,weightValue)
        }
    }

    function BMI(height,weight){
       
             let cBmi=Number((weight / ((height / 100) ** 2)).toFixed(2))
             calculateBMI.textContent=`${cBmi}`

             if(cBmi<18.5){
                document.querySelector('.result h2').textContent='underWeight'
             }
            else if(cBmi<24.9){
                document.querySelector('.result h2').textContent='Normal/healthy weight'
             }
            else if(cBmi<29.9){
                document.querySelector('.result h2').textContent='overweight'
             }
             else{
                document.querySelector('.result h2').textContent='Obesity'
             }
        if(hError==true){
            heightError.textContent=''
            hError=false
            calculate=true
        }
        if(wError==true){
              weightError.textContent=''
            wError=false
            calculate=true
        }
    }

    function reset(){
        let height=document.querySelector('.height').value=''
        let weight=document.querySelector('.weig').value=''
          calculateBMI.textContent=''
    }