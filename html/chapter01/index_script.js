// div#box객체를 가져온다.(스네이크 표기법만 씀)
let div_box = window.document.getElementById("box");
let position = 0;

function moveBox(){
    if(position < 200 ){
        position += 1;
        div_box.style.left = position + "px";
    }else{
        position = 0;
        div_box.style.left = position + "px";
    }
    //계속해서 moveBox()를 불러주는 콜백기능을 부여한다
    window.requestAnimationFrame(moveBox)
}

moveBox();


