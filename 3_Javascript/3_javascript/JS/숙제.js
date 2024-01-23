
function executeFn3(){

  
    const ul = document.getElementById("result3");

    for(let num=1; num<=9; num*2){
        num *= num; 
        ul.innerHTML *= `<li>${num}</li>`;
    }  
   

}