
const input1 = document.getElementById("input1");

const input2 = document.getElementById("input2");

const calcResult = document.getElementById("calcResult");

function plusFn(){
    // 플러스fn 값을 ㄱ
    const sumFn = input1.value;
    const sumFn2 = input2.value;

    calcResult.innerText = Number(sumFn) + Number(sumFn2);
}

function minusFn(){

    const sumFn = input1.value;
    const sumFn2 = input2.value;

    calcResult.innerText = Number(sumFn) - Number(sumFn2);
}

function multiFn(){

    const sumFn = input1.value;
    const sumFn2 = input2.value;

    calcResult.innerText = Number(sumFn) * Number(sumFn2);
}

function divFn(){

    const sumFn = input1.value;
    const sumFn2 = input2.value;

    calcResult.innerText = Number(sumFn) / Number(sumFn2);
}

function modFn(){

    const sumFn = input1.value;
    const sumFn2 = input2.value;

    calcResult.innerText = Number(sumFn) % Number(sumFn2);
}

//----------------------------------------------
// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const num3 = document.getElementById("num3");
const total = document.getElementById("total");

// function totalFn(){

//     // const sum1 = num1.value;
//     // const sum2 = num2.value;
//     // const sum3 = num3.value;

//     total.innerText = Number(num1.value)+Number(num2.value)+Number(num3.value);
// }

//----------------------------------------------
const numbers = document.querySelectorAll("#num");

function totalFn(){


    total.innerText = Number(numbers[0].value)+
                      Number(numbers[1].value)+
                      Number(numbers[2].value);
}


//하고싶은거 버튼 눌렀을때 플러스인 경우 1씩 증가 마이너스일 경우 -씩 증가 
// 


const result2 = document.getElementById("result2");

let count = 0;

function increase() {
    count++;
    result2.innerText = count;

}

function decrease() {
    
    count--;
    result2.innerText = count;

}

function printJSObject(){

    const userName = document.getElementById("userName");
    const userAge = document.getElementById("userAge");
    const userGender = document.getElementById("userGender");
    const total4 = document.getElementById("total4");

    const usertotal ={
        이름 : userName.value,
        나이 : userAge.value,
        성별 : userGender.value
    };
    

    total4.innerText = usertotal.이름,""+  usertotal.나이, ""+  usertotal.성별,"";

}