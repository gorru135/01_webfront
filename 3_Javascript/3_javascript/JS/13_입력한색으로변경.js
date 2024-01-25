const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".color-input");

document.querySelector("#changeButton").addEventListener("click", function(){

    for(let i=0; i<boxList.length; i++){
        boxList[i].style.backgroundColor = inputList[i].value;
    }
});


//-------------------------------------------------------------


let xindex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

//ddEventListener("이벤트종류",함수(이벤트가 발생했을때 수행할기능))
//전달인자 2개 

document.addEventListener("keydown",function(e) {

    // e : 이벤트 객체 
    const bombberman = document.getElementById("user");
    switch(e.key){
        
        case 'ArrowRight' : 
        xindex += 10; 
        break;

        case 'ArrowLeft' :
            xindex -=10;
        break;

        case 'ArrowUp' :
            xindex -=10;
        break;

        case 'ArrowDown' :
            xindex +=10;
        break;
        
        case 'x' : 
        const box = document/this.getElementById("container2");
        box.innerHTML +=
        `<img src = "../../images/boom.png"
        style ="transform: translate3d(${xindex}px, ${yindex}px,0); position: absolute;>`;
        break;
        default : alert("방향키와 x만 가능"); break;
    }

    bombberman.style.transform =`translate3d(${xindex}px, ${yindex}px,0)`;

});
