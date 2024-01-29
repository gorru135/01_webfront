
const container = document.querySelector(".container");

const number = document.querySelector(".number");

const result = document.querySelector(".result");

const reset = document.querySelector(".reset");



result.addEventListener("click", ()=>{

for(let i=0; i=)
});

reset.addEventListener("click", ()=>{
    result.remove()
});