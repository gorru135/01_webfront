const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){

    const width = document.querySelector("#width");
    const height = document.querySelector("#height");
    const fontSize = document.querySelector("#fontSize");
    const font = document.querySelector("[name='font']:checked");
   
  
    const color = document.querySelector("#color");
    const backgroundColor = document.querySelector("#backgroundColor");
    const justify = document.querySelector("[name='justifyContent']:checked");
    
    const align = document.querySelector("[name = 'align']:checked");

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

    if (font != null){
        box.style.fontSize = font.value;
    }
    
    if (color.value.trim().length > 0){
        box.style.color = color.value;
    }

    if (backgroundColor.value.trim().length > 0){
        box.style.backgroundColor = backgroundColor.value;
    }

    if ( justify != null){
        box.style.justifyContent= justify.value;
    }

    if ( align != null){
        box.style.alignItems= align .value;
    }   console.log(align)

    if (textarea.value.trim().length > 0){
        box.innerText = textarea.value;
    }

});