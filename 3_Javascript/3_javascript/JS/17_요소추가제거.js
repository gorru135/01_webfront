/* */
const add = document.querySelector("#add");
const calc = document.querySelector("#clac");
const container = document.querySelector(".container");
const row = document.querySelector(".row");



add.addEventListener("click", () => {

    //div 요소추가 
    const addbox = document.createElement("div");
    addbox.classList.add("row");
   
    
    // input 만들기
    const input = document.createElement("input");
    input.type = "number";
    input.classList.add("input-number");
    
    // input옆 x버튼 -> x 만들기
    const span = document.createElement("span");
    span.classList.add("remove-row")
    span.innerHTML = "&times;";
    
    addbox.append(input , span);

    container.append(addbox);

    // x버튼 누르면 사라지게 만들기 
    span.addEventListener("click",() => {
        addbox.remove()
    })

});

calc.addEventListener("click", () => {
    // 클릭시 += 만들기 
    let sum = 0;

});


/* !!!!!!답안지!!!!!!!
// 요소. remove() : 요소 제거 
// 요소. classList.add("클래스명") : 클래스 추가 
// 요소. classList.remove("클래스명") : 클래스 제거

// 만들려는 기능 중 공통적으로 사용되는 요소를 전역 변수 선언 
const addbtn = document.getElementById("add");
const clacbtn = document.getElementById("clac");
const container2 = document.getElementById(".container"); 
// 최종적으로 동적으로 만들어진 요소가 붙여야하는 요소 

// 추가 버튼 클릭 시 
addbtn.addEventListener("click",()=>{
    // 1. div 요소 생성하기 
    const row2 = document.createElement("div"); // const row2 -<div></div>

    // 2. 요소에 class 추가하기
    row2.classList.add("row2"); // < const row2 - <div class=:"row2"></div>
    
    // 3. input 요소 생성하기 
    const input2 = document.createElement("input2"); //<input>

    // 4. type="number" 추가하기 
    // input.type = "number"
    input2.setAttribute("type","number"); //<input type = "number">

    // 5. 클래스 "input-number" 추가하기 
    input2. classList.add("input-number"); //<input type = "number" class="input-number">

    // 6. span 요소 생성하기 
    const span2 = document.createElement("span2");//<span></span>

    // 7. span 태그에 remove-row 추가 
    span2.classList.add("remove-row"); //<span class="remove-row"></span>

    // 8. 내용으로 &times; 추가 (innerHTML 사용)
    span2.innerHTML = "&times;";//<span class="remove-row">x</span>

    //----조립하기-----

    // 9. div.row 요소에게 자식으로 input, span 추가 
    row2.append(input2, span2);

    // 10. 완성된 div.row 를 container의 마지막 자식으로 추가하기 
    container2.append(row2);

    //---------------------------------------
    // 클릭된 x 버튼의 부모 요소를 제거 
    
    // 1. 만들어지는 x버튼(span)에 이벤트 리스너 추가 
    span2.addEventListener("click", (e)=>{

    // 2. 현재 이벤트가 발생한 요소(클릭된 x버튼)
    // 부모 요소를 선택 (탐색)
    const parent = e.target.parentElement; // == div.row

    parent.remove();
    });

});

// 계산 버튼 클릭 시 
clacbtn.addEventListener("click", () => {

    // 1) 모든 .input-number 얻어오기 
    const numbers = document.querySelectorAll(".input-number");

    // 2) for문으로 모든 요소 접근하여 
    // 작성된 값(value)을 얻어와 
    // 숫자로 변경(Number())한 후 
    // 합계 저장 변수 sum에 누적 

    let sum = 0;

    for(let i= 0; i < numbers.length; i++) {
        sum += Number(numbers[i].value);
    }
    // 3) for문 끝나면 alert로 결과 출력 
    alert("결과 :" + sum);

});


*/
