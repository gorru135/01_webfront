// 10자 까지 클릭한 숫자 기록 하기 

// 구현하고 싶은 것! 
// 1~0까지 숫자를 클릭 했을 시 클릭한 숫자에 
// 번호가 쌓이게 만든다. 
// 초기화 버튼 클릭시 쌓인 번호 reset 

// 해야 할거 
// 1. HTML에 btn이란 이름을 가진 버튼으로 클릭 이벤트를 만든다 
document.getElementById("btn").addEventListener("click", () =>{
// 2. number라는 클래스를 가진 요소들을 span에 쌓이게 만든다. 
    const number1 = document.querySelectorAll(".number");
    const result1 = document.getElementById("result");
    
    const nmb = number1.value;

    nmb.innerText = result1;
    
    

});
