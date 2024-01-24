function executeFn3(){

    // 입력받은 숫자
    let inputNumber = Number(document.getElementById("input3").value);

    // 구구단을 표시할 ul 태그
    const ul = document.getElementById("result3");

    ul.innerHTML = '';    

    // 반복문
    // num 은 1부터 시작해서 9까지 1씩 커진다
    // num++ 은 num = num+1 과 같은 의미 
    if(input < 2 || input > 9){
        alert("2~9 사이만 입력해 주세요");
        return;
    }
    
    for(let num=1; num<=9; num++){
        
       
        
        // result = 입력받은 숫자 * num 
        let result = inputNumber * num; 
        ul.innerHTML += `<li>${inputNumber} x ${num} = ${inputNumber*num} </li>`;
    } 
}

