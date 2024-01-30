const v1 = document.getElementById("compareValue1");
const v2 = document.getElementById("compareValue2");
const result1 = document.getElementById("result1");

function compareFn1(){
    const sum = Number(v1.value);
    const sum1 = Number(v2.value);

    result1.innerText = (sum == sum1)
}

const v3 = document.getElementById("compareValue3");
const v4 = document.getElementById("compareValue4");
const result2 = document.getElementById("result2");

function compareFn2(){
    const sum2 = Number(v3.value);
    const sum3 = Number(v4.value);

    result2.innerText = (sum2 >= sum3)
}

const p1 = document.getElementById("input3_1");
const p2 = document.getElementById("input3_2");
const result3 = document.getElementById("result3");

function checkFn3(){
    const sum4 = Number(p1.value);
    const sum5 = Number(p2.value);

    result3.innerHTML = `${sum4}은/는${sum5}의 배수 : ${sum4 % sum5 == 0}`;
}


