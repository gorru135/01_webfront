document.getElementById("id").addEventListener("keyup", (e)=>{

    const id = document.getElementById("id");

    const regExp = /^[a-z][\w-_]{5,14}/;


    if(e.target.value.length == 0){
        e.target.style.backgroundColor = "white";
        
    } 

    if(e.target.test(e.target.value)){

        e.target.style.backgroundColor = "springgreen";

    }else{
        e.target.style.backgroundColor = "red";
    }
    
});