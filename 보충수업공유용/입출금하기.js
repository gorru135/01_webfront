// prompt 사용 연습
function test() {

    const password = prompt("비밀번호를 입력하세요");

    // 확인 -> 입력한 문자열
    // 취소 -> null

    if(password == null) { // 취소
        alert("취소");

    } else { // 확인

        if(password == '1234') {
            alert("비밀번호 일치");
        } else {
            alert("비밀번호 불일치!");
        }

    }
}
//----------------------------------------------------

// 구현하고 싶은것
// 통장 잔액은 현재 가지고 있는 내 금액 
// 금액창에 돈 입금시 잔액 창 변경 +금액창은 리셋 
// 돈 출금시 비밀번호 입력 + 현재 잔액 이상 금액은 뽑지 못함
// 잔액 - 금액 + 현재 남아있는 잔액 

const output = document.getElementById("output"); // 잔액 부분 
const amount = document.getElementById("amount"); // 금액 부분 

let balance = 100000; // 남아있는 잔액 
const password = "1234"; // 비밀번호 

output.innerText = balance; // 초기 금액 설정


function deposit(){// 입금 하기 
    if(amount.value.length == 0){
        alert("입금할 금액을 넣어주세요..");
    }else{
        balance += Number(amount.value);
        // 숫자로 바꾼 금액 값을 남아있는 잔액과 더하겠다.
        output.innerText = balance;
        // 남아있는 잔액을 텍스트안에 띄우겠다 
        amount.value = "";
        // 금액은 "" 값
    }
}

// 1. 출금하려면 금액을 설정한다 .
// 2. 출금버튼을 누른다 .
// 3. 출금버튼을 누르면 비밀번호를 입력하게 만든다.
// 4. 비밀번호가 맞을 경우 금액이 빠진다.
// 5. 하지만 틀릴경우 alert창이 뜬다.(ex. 비밀번호가 틀렸습니다.)



