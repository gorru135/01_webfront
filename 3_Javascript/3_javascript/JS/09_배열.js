// 배열 선언 및 기초 사용법
function check1() {
    // 배열 선언 방법 확인 
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["사과", "바나나", "딸기"];

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
    

    // 배열명.length : 배열의 길이(배열에 있는 칸 수 또는 저장된 데이터 수)
    console.log(arr1.length);
    console.log(arr2.length);
    console.log(arr3.length); 
    console.log(arr4.length); 

    // 배열의 index 
    /**
     *  - 배열의 각 칸을 구분하는 번호 
     *  - 0 부터 시작! 
     *  - 중간에 번호를 생략할 수 없다.(항상 연속적)
     *  - 마지막 index == 배열길이 -1
     */

    // 배열명[index] -> 배열의 해당 인덱스에 존재하는 데이터 반환
    console.log('arr4[0] : ', arr4[0]);
    console.log('arr4[1] : ', arr4[1]);
    console.log('arr4[2] : ', arr4[2]);

    // 배열명[index] = 값; -> 해당 인덱스에 지정된 값 대입 
    arr2[0] = 100;
    arr2[1] = "점심먹자";
    arr2[2] = true;
    console.log("arr2 : ",arr2);
    //JS 배열의 특징 : 인덱스별로 자료형을 다르게 할 수 있다!

    // 길이 제한이 없다 -> 값을 배열에 원하는 만큼 추가 가능 
    arr1[0] = "가";
    arr1[1] = "나";
    arr1[2] = "다";
    console.log("arr1 :" ,arr1);

    // 원하는 인덱스에 값을 마음대로 추가할 수 있다. 
    // -> 중간에 건너뛴 index는 빈칸으로 채워짐 
    arr1[4] = "마";
    console.log("arr1 :" ,arr1);
}

function check2(){

    //for 문을 이용해서 배열 요소 초기화 하기 
    // 초기화 : 변수/배열 요소에 처음으로 값을 대입하는 것 

    // index : 배열의 각 칸을 구분하는 번호
    // 배열 요소 == 배열의 각 칸 

    // for x
    const arr1 = []; 
    arr1[0] = 0;
    arr2[1] = 10;
    arr2[2] = 20;
    arr2[3] = 30;

    console.log("arr1 : ", arr1);

     
    arr1[0] = 0;
    for(let i =0; i <= 3; i++){
        arr2[o] 

        console.log("arr2 : ", arr2);

    } 

    
}

// 배열과 for 문2
function check3() {
    // 배열에 저장된 값 하나씩 순서대로 출력하기
    // -> for문을 이용해서 배열의 모든 요소 접근하기 

    const arr = [10, 20, 50, 100, 500, 1000]; 
    // (i <= arr.)
    for(let i=0; i <= arr.length-1; i++){
        console.log(`arr[${i} == ${arr[i]}]`);
    }
}

// 배열과 for 문 3 
function check4(){

    // for문을 이용해서 배열을 순서대로 초기화 한 후 
    // 다른 for문을 이용해서 배열 요소를 하나씩 모두 출력
    const arr = new Array(5); // 5칸 짜리 배열(요소별로 내용 없음)

    // 1. 배열을 순서대로 초기화 
    for(let i = 0; i < arr.length; i++){
        arr[i] = Number(prompt(`${i}번째 숫자 입력`));
    }
    // 2. 배열 요소를 하나씩 모두 출력 + sum

    let sum = 0; // 합계 

    for(let i = 0; i < arr.length; i++){
        console.log(`arr[${i}] : ${arr[i]}`);
        sum += arr[i]; //값 누적 
    }   
    console.log("sum : ", sum);
}
// 저녁 멥뉴 뽑기

function selecMenu(){
    //결과 출력 span
    const menuResult = document.getElementById("menuResult");
    
    // 저녁 메뉴로 초기화된 배열 생성
    const menu = ["제육볶음", "돈까스", "파스타","순대국","닭갈비","초밥"
                , "햄버거", "알탕","피자","백반","마라탕"]; //길이 11
    // menu 배열 index 범위 내에서 난수 생성
    const randomNumber = Math.floor(Math.random()* menu.length);

    // 난수 번째 index 요소값을 화면에 출력
    menuResult.innerText = menu[randomNumber];
}


// --------------------------------------------------------------

//2차원 배열 

function check5(){

    const arr = [[1,2,3,4],
     [5,6,7,8], 
     [9,10,11,12]];
    console.log(arr[1][3]);
    console.log(arr[2][2]);
    // 배열명[행][열]

    console.log(arr[4][3]);

    const arr1 = [100,200,300,400];
    const arr2 = [900, 800, 700,600];

    arr[3] = arr1;
    arr[4] = arr2;
    
}

//2부터 2씩 증가하는 수를 
//5행 5열 배열의 모든 요소를 차례대로 대입하고 출력하기
/**
 * []
 * 
 * 
 */
function check6() {

        let count = 2;

        const arr = [];

    for(let row = 0; row < 5; row++) {// 행 제어 

        arr[row] = []; 
        // arr[0] =[]
        for(let col = 0; col < 5; col++) {
            arr[row][col] = count; //row행 col열에 count 대입
            // arr[0][0]
            // arr[0][1]
            // arr[0][2]
            // arr[0][3]
            // arr[0][4]
            //--------------
            //arr[1][0] =12; 
            //arr[1][1] =14;
            //... (5행까지) 
            count += 2;//카운트를 2 증가 
        }

    } 
    console.log(arr);
}

