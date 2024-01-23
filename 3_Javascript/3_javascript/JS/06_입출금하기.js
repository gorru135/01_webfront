//promt 사용 연습
function test(){
    const password = prompt("비밀번호를 입력하세요");

    //확인 -> 입력한 문자열 
    //취소 -> null
    if(password == null) { //취소
        alert("취소");

    } else{ // 확인
        if(password == '1234'){
            alert("비밀번호 일치");
        } else {
            alert("비밀번호 불일치!");
        }
    }
}


const output = document.getElementById("output");
const amount = document.getElementById("amount");

let balance = 10000; //잔액 기록 변수 (초기값 10000)
const password = '1234'; //비밀번호 저장 변수 (초기 비밀번호 1234)


output.innerText = balance

function deposit(){
    // 1. 입금 버튼 클릭 
    // 2. input 에 입력된 금액 구하기 
    // 3. 구한 금액을 잔액(balance)에 추가하기
    if(amount.Value.length == 0){
        alert("금액을 입력해주세요");

    } else {
        balance += Number(amount.Value);
        // blance = balance+ Number(amount.value);
        output.innerText = balance;

        amount.value = '';
    }

}

function withdrawal(){

    if(amount.value.length == 0) {
        alert("금액을 입력해주세요");
    } else{
        const password = pro("비밀번호를 입력하세요");
        if(password == null) {
            alert("취소");
        }else {
            if(password !='1234'){
                alert("비밀번호가 일치하지 않습니다.");
            } else {
                const money = Number(amount.value);

                //출금할 금액이 잔액 보다 큰 경우

                if(money > balnce){
                    alert("출금 금액이 잔액보다 클 수 없습니다.");

                } else {
                    balance -= money;
                    output.innerText = balance;
                    amount.value = ``;

                    alert(`${money}원이 출금 되었습니다. 남은 잔액 ${balance}`);
                }
            }
        }
    }

}