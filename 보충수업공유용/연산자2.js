const compareValue1 = document.getElementById("compareValue1");
const compareValue2 = document.getElementById("compareValue2");
const result1 = document.getElementById("result1");
function compareFn1(){

    const sum1 =  Number(compareValue1.value);
    const sum2 =  Number(compareValue2.value);


    result1.innerText = (sum1 == sum2);
}


const compareValue3 = document.getElementById("compareValue3");
const compareValue4 = document.getElementById("compareValue4");
const result2 = document.getElementById("result2");
function compareFn2(){

    const sum3 =  Number(compareValue3.value);
    const sum4 =  Number(compareValue4.value);


    result2.innerText = (sum3 > sum4);
}


const input1 = document.getElementById("input3_1");
const input2 = document.getElementById("input3_2");
const result3 = document.getElementById("result3");

function checkFn3(){
    const sum = Number(input1.value);
    const sum1 = Number(input2.value);

    result3.innerText = `${sum}은/는${sum1}의 배수 ${sum % sum1 ==0}`;
}

let sum = 0;
const result4 = document.getElementById("result4");
const input4 = document.getElementById("input4");

function minus4(){
    const value = Number(input4.value);
    sum -= value;
    result4.innerText = sum; 
}

function plus4(){
    const value = Number(input4.value);
    sum += value;
    result4.innerText = sum; 
}

function checkFn5() {
    const val1 = (104 >= 100) && (100 % 2 ==0);
    console.log(`104는 100 이상의 수 이면서 짝수인가? ${val1}`);

    const val2 = (50 <= 70) && (50 % 4 ==0);
    console.log(`50은 70 이하이고 4의 배수인가?${val2}`)

    const val3 = 1 < 3 && 3 < 10;
    console.log(`3은 1부터 10 사이의 수가 맞는가?${val3}`)

    const val4 = (4 > 10) || (4 % 2 ==0);
    console.log(`4는 10을 초과 하거나, 짝수인가?${val4}`)


    console.log(`!true = ${!true}`);
    console.log(`!false = ${!false}`);

    const bool6 = false; 
    console.log( !(bool6 != true)  ); // false
}

const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");

function login() {
    const id = inputId.value;
    const pw = inputPw.value;

    const success = "로그인에 성공하셨습니다.";
    const fail = "아이디 또는 비밀번호가 일치하지 않습니다.";

    const message = (id == "gorru123") && (pw == "gorru13") ? success:fail;

    alert(message);

}