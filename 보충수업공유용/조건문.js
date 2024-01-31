const input1 = document.getElementById("input1");

function check1(){
    const num = Number(input1.value);

    if(num % 2==0){
        alert("양수입니다.")
    }else{
        alert("음수입니다.")
    }
}


const sum12 = document.getElementById("sum12");

function check2(){
    const random = Math.floor(Math.random() *101);

    if(random % 2 ==0){
        sum12.innerText = (`${random}짝수 입니다.`)
    }else{
        sum12.innerText = (`${random}홀수 입니다.`)
    }
}

const sum1 = document.getElementById("sum1");

function check3(){
    const random = Math.floor(Math.random() * 7)-3;

    if(random > 0){
        sum1.innerText =(`${random}양수 입니다.`)
    }else if(random == 0){
        sum1.innerText =(`${random} 입니다.`)
    }else{
        sum1.innerText =(`${random}음수 입니다.`)
    }
}

const inputAge = document.getElementById("inputAge");

function check4(){
    const age = Number(inputAge.value);

    if(inputAge.value.length == 0){
        alert("값을 입력해주세요.")

    }else if(age < 0 || age >150){
        alert("잘못 입력 하셨습니다.")

    }else if(age >= 20 && age <= 150){
        alert("성인")
    }else if(age >= 0 && age <=13){
        alert("어린이")
    }else {
        alert("청소년")
    }
}

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const calcResult = document.getElementById("calcResult");

function calc(op){
    const num1 = Number(number1.value);
    const num2 = Number(number2.value);

    let resurt;

    switch(op){
        case '+': resurt = num1 + num2; break;
        case '-': resurt = num1 - num2; break;
        case '*': resurt = num1 * num2; break;
        case '/': resurt = num1 / num2; break;
        case '%': resurt = num1 % num2; break;


        default : resurt = "잘못된 연산자"; break;
    }

    calcResult.innerText = resurt;
}