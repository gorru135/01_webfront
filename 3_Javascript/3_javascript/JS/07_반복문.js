
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

/* 다음 모양 출력하기
12345
12345
12345
*/

function check8(){
    //4바퀴 반복하는 for문
    for(let y = 1; y <= 4; y++){
        // "12345" 출력하는 구문 
        let str ="";
        for(let x =1; x<=5; x++){
            str += x;
        }
        console.log(str);
    }
}

function check9(){

    for(let y=1; y <= 5; y++){

        let str = "";
        for(let x= 1; x<=y; x++){
            str += x;
        }
        console.log(str);
    }
}

//while 문 확인

function check16(){
    // 변수를 선언만 해두기
    let val; // undefined

    // 취소를 누르기 전 까지 반복 
    // == 취소를 누르면 반복하지 않겠다.
    while(val !== null) {
        // 동일 비교 연산자 
        // != 값이 다른 경우 
        // !== 값,자료형이 모두 다른경우 true
        // === 값,자료형이 모두 같은경우 true

        val = prompt("입력 후 확인"); // 변수에 pront값 대입
        // 확인 -> 입력한 값
        // 취소 -> null
        console.log(val);
    }
}

//메뉴 주문하기 
function check17(){

    // 메뉴 가격
    const gimbap = 3000;
    const ramen = 3500;
    const donkkaseu = 5000;

    // 주문 개수 카운트 
    let gCount = 0; // 김밥 
    let rCount = 0; // 라면
    let dCount = 0; // 돈까스

    // pronmpt로 입력할 값을 저장할 변수 선언
    let input; // undefined

    while(input !== null){// 취소 누르기 전까지 반복
        input = prompt("메뉴 번호를 입력하세요!");

        switch(input) {
            case "1" : gCount++; break;
            case "2" : rCount++; break;
            case "3" : dCount++; break;
            case null : alert("주문완료!"); break;
            default : alert("메뉴에 작성된 번호만 입력해 주세요"); break;
        }
    }

    alert(` 김밥 : ${gcount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
    let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu)

    alert(`총 가격 : ${sum} 원`)
}

function check18(){
    // 1부터 10까지 출력 

    let num = 1;
    while(num < 11){
        console.log(num); 

        num++;
    }
    console.log("------------------")

    // 10부터 1까지 1씩 감소 (while)

    let x= 10;

    while( x > 0){
        console.log(x);
        x--;
    }

}
