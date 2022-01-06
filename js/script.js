////////////////////////////////////////////////////// Slide JS
let nextBTN = document.querySelector("#next");
let prewBTN = document.querySelector("#prew");
let text1 = document.querySelector("#nth1");
let text2 = document.querySelector("#nth2");
let text3 = document.querySelector("#nth3");
let textPoint = 1;
nextBTN.onclick = function(){
    if(textPoint == 1){
        text1.style.display = "block";
        text2.style.display = "none";
        text3.style.display = "none";
        textPoint++;
        if(textPoint >= 4){
            textPoint = 1;
        }else if(textPoint <= 0){
            textPoint = 3;
        }else{}
    }
    else if(textPoint == 2){
        text1.style.display = "none";
        text2.style.display = "block";
        text3.style.display = "none";
        textPoint++;
        if(textPoint >= 4){
            textPoint = 1;
        }else if(textPoint <= 0){
            textPoint = 3;
        }else{}
    }
    else if(textPoint == 3){
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "block";
        textPoint++;
        if(textPoint >= 4){
            textPoint = 1;
        }else if(textPoint <= 0){
            textPoint = 3;
        }else{}
    }else{}
}
prewBTN.onclick = function(){
    if(textPoint == 1){
        text1.style.display = "block";
        text2.style.display = "none";
        text3.style.display = "none";
        textPoint--;
        if(textPoint >= 4){
            textPoint = 1;
        }else if(textPoint <= 0){
            textPoint = 3;
        }else{}
    }
    else if(textPoint == 2){
        text1.style.display = "none";
        text2.style.display = "block";
        text3.style.display = "none";
        textPoint--;
        if(textPoint >= 4){
            textPoint = 1;
        }else if(textPoint <= 0){
            textPoint = 3;
        }else{}
    }
    else if(textPoint == 3){
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "block";
        textPoint--;
        if(textPoint >= 4){
            textPoint = 1;
        }else if(textPoint <= 0){
            textPoint = 3;
        }else{}
    }else{}
}


////////////////////////////////////////////////////// Blog JS
let nextTextBTN = document.querySelector("#nextText");
let prewTextBTN = document.querySelector("#prewText");
let Divtext1 = document.querySelector("#BlogPage1");
let Divtext2 = document.querySelector("#BlogPage2");
let Divtext3 = document.querySelector("#BlogPage3");
let DivtextPoint = 1;
nextTextBTN.onclick = function(){
    if(DivtextPoint == 1){
        Divtext1.style.display = "block";
        Divtext2.style.display = "none";
        Divtext3.style.display = "none";
        DivtextPoint++;
        if(DivtextPoint >= 4){
            DivtextPoint = 1;
        }else if(DivtextPoint <= 0){
            DivtextPoint = 3;
        }else{}
    }
    else if(DivtextPoint == 2){
        Divtext1.style.display = "none";
        Divtext2.style.display = "block";
        Divtext3.style.display = "none";
        DivtextPoint++;
        if(DivtextPoint >= 4){
            DivtextPoint = 1;
        }else if(DivtextPoint <= 0){
            DivtextPoint = 3;
        }else{}
    }
    else if(DivtextPoint == 3){
        Divtext1.style.display = "none";
        Divtext2.style.display = "none";
        Divtext3.style.display = "block";
        DivtextPoint++;
        if(DivtextPoint >= 4){
            DivtextPoint = 1;
        }else if(DivtextPoint <= 0){
            DivtextPoint = 3;
        }else{}
    }else{}
}
prewTextBTN.onclick = function(){
    if(DivtextPoint == 1){
        Divtext1.style.display = "block";
        Divtext2.style.display = "none";
        Divtext3.style.display = "none";
        DivtextPoint--;
        if(DivtextPoint >= 4){
            DivtextPoint = 1;
        }else if(DivtextPoint <= 0){
            DivtextPoint = 3;
        }else{}
    }
    else if(DivtextPoint == 2){
        Divtext1.style.display = "none";
        Divtext2.style.display = "block";
        Divtext3.style.display = "none";
        DivtextPoint--;
        if(DivtextPoint >= 4){
            DivtextPoint = 1;
        }else if(DivtextPoint <= 0){
            DivtextPoint = 3;
        }else{}
    }
    else if(DivtextPoint == 3){
        Divtext1.style.display = "none";
        Divtext2.style.display = "none";
        Divtext3.style.display = "block";
        DivtextPoint--;
        if(DivtextPoint >= 4){
            DivtextPoint = 1;
        }else if(DivtextPoint <= 0){
            DivtextPoint = 3;
        }else{}
    }else{}
}