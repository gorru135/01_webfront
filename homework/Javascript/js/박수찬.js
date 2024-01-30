const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){

    const width = document.querySelector("#width");
    const height = document.querySelector("#height");
    const fontSize = document.querySelector("#fontSize");
    const font = document.querySelector("[name='font']:checked");
   
  
    const color = document.querySelector("#color");
    const backgroundColor = document.querySelector("#backgroundColor");
    const justify = document.querySelector("[name='justifyContent']:checked");
    
    const align = document.querySelector("[name = 'alignItems']:checked");

    const textarea = document.querySelector("#textarea");
    const box = document.querySelector("#box");


    if(width.value.trim().length > 0) {
        
        box.style.width = width.value + "px";
       
    }
    if (height.value.trim().length > 0){
        box.style.height = height.value + "px";
    }
    if (fontSize.value.trim().length > 0){
        box.style.fontSize = fontSize.value + "px";
    }

    if (font == null){// 안되고있음
        box.style.fontSize = font.value;
    }
    
    if (color.value.trim().length > 0){
        box.style.color = color.value;
    }

    if (backgroundColor.value.trim().length > 0){
        box.style.backgroundColor = backgroundColor.value;
    }

    if ( justify == null){// 안되고있음
        box.style.justifyContent= justify.value;
    }

    if ( align == null){// 안되고있음
        box.style.alignItems= align .value;
    }

    if (textarea.value.trim().length > 0){
        box.innerText = textarea.value;
    }

});