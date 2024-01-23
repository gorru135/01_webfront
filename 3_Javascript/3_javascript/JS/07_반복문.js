
/* for(let num = 1; num <= 5; num++) {
    // 조건식이 True 인 경우 반복 수행할 코드;
    console.log("통과!");
}*/

function check1() {

    let result = ""; //빈 문자열

    for(let num=1; num <=5; num++){
        // console.log(num);

        result += num; 
        // result = result + num;
        //  "1"   =  "0"   + 1  (1턴)
        //  "12"  =  "1"   + 2  (2턴)
        //  "123" = "12"   + 3  (3턴)
        //  "1234" ="123"  + 4  (4턴)
        //  "12345"="12345"+ 5  (5턴)
    }
    console.log(result);

}

function check2(){
    // 1부터 10까지 1씩 증가하며 출력
    for(let num =1; num<=10; num++) {
        console.log(num);
    }
    
}

function check3(){
    for(let num=1; num<=20; num++){
        console.log(num);
    }
}

function check4(){
    for(let num=5; num<=15; num++){
        console.log(num);
    }
}

function check5(){
    for(let num=1; num<=30; num+=2){
        console.log(num);
    }
}

function check6(){
   
        let sum =0; // 합계를 저장하기 위한 변수

        for(let num=1; num<=10; num++){
            sum+=num;
    }
    console.log("sum:", sum);
}



function sumFn(){
    

        const start = Number(document.getElementById("inputNumber1-1").value);
        const end = Number(document.getElementById("inputNumber1-2").value);
        const result1 = document.getElementById("result1");

        let sum = 0;
        // start 부터 end 까지 1씩 증가하는 for 문

        for(let num =start; num <= end; num++){
            sum += num; //num 값을 sum 에 누적 
        }
        result1.innerText = sum;
}





function executeFn2(){
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const val = Number(document.getElementById("inputNumber2-3").value);

    //결과 출력할 ul 요소
    const ul = document.getElementById("result2"); // ul태그

    ul.innerHTML = "";
    for(let num=start; num<=end; num+=val){
        ul.innerHTML += `<li>${num}</li>`;
        
        
    }
    
}