var yposition1 = 0;
var yposition2 = 0;
var yposition3 = 0;
var nplay = 0, cplay = 0;

const rueda1 = document.getElementById("wheel1");
const rueda2 = document.getElementById("wheel2");
const rueda3 = document.getElementById("wheel3");

const advance1 = document.getElementById("avanceButton1");
const advance2 = document.getElementById("avanceButton2");
const advance3 = document.getElementById("avanceButton3");

const sspinButton =  document.getElementById("sspinButton");
const spinButton =  document.getElementById("spinButton");

advance1.disabled = true;
advance2.disabled = true;
advance3.disabled = true;


//Botón juego simple
sspinButton.addEventListener('click', ()=>{

    sspinButton.disabled = true;
    spinButton.disabled = true;
    setTimeout(() => {
        sspinButton.disabled = false;
        spinButton.disabled = false;
    }, 5000);

    //Rueda 1
    setTimeout(()=>{
        rueda1.style.transition= "background-position 3.5s ease";
        yposition1 = (Math.floor(Math.random() * 8) + 1) * 79 + (3555);
        rueda1.style.backgroundPositionY= (yposition1)+"px";
    },100);
    
    rueda1.style.transition= 'none';
    rueda1.style.backgroundPositionY = (((yposition1 / 79) % 9) * 79)+"px";
    

    //Rueda 2

    setTimeout(()=>{
        rueda2.style.transition= "background-position 4s ease";
        yposition2 = (Math.floor(Math.random() * 8) + 1) * 79 + (3555);
        rueda2.style.backgroundPositionY= (yposition2)+"px";
    },100);
    
    rueda2.style.transition= 'none';
    rueda2.style.backgroundPositionY = (((yposition2 / 79) % 9) * 79)+"px";

    //Rueda 3

    setTimeout(()=>{
        rueda3.style.transition= "background-position 4.5s ease";
        yposition3 = (Math.floor(Math.random() * 8) + 1) * 79 + (3555);
        rueda3.style.backgroundPositionY= (yposition3)+"px";
    },100);
    
    rueda3.style.transition= 'none';
    rueda3.style.backgroundPositionY = (((yposition3 / 79) % 9) * 79)+"px";

    winCondition();
    nplay =1;

});

//boton juego normal
document.getElementById("spinButton").addEventListener('click', ()=>{

    cplay = 0;

    setTimeout(() => {
        advance1.disabled = false;
        advance2.disabled = false;
        advance3.disabled = false;
    }, 4500);


    //Rueda 1
    setTimeout(()=>{
        rueda1.style.transition= "background-position 3.5s ease";
        yposition1 = (Math.floor(Math.random() * 8) + 1) * 79 + (3555);
        rueda1.style.backgroundPositionY= (yposition1)+"px";
    },100);
    
    rueda1.style.transition= 'none';
    rueda1.style.backgroundPositionY = (((yposition1 / 79) % 9) * 79)+"px";
    

    //Rueda 2

    setTimeout(()=>{
        rueda2.style.transition= "background-position 4s ease";
        yposition2 = (Math.floor(Math.random() * 8) + 1) * 79 + (3555);
        rueda2.style.backgroundPositionY= (yposition2)+"px";
    },100);
    
    rueda2.style.transition= 'none';
    rueda2.style.backgroundPositionY = (((yposition2 / 79) % 9) * 79)+"px";

    //Rueda 3

    setTimeout(()=>{
        rueda3.style.transition= "background-position 4.5s ease";
        yposition3 = (Math.floor(Math.random() * 8) + 1) * 79 + (3555);
        rueda3.style.backgroundPositionY= (yposition3)+"px";
    },100);
    
    rueda3.style.transition= 'none';
    rueda3.style.backgroundPositionY = (((yposition3 / 79) % 9) * 79)+"px";

    spinButton.disabled = true;
    sspinButton.disabled = true;
    winCondition();
    nplay = 1;

});


document.getElementById("avanceButton1").addEventListener('click', ()=>{

    

    if(cplay < 3 ){
        rueda1.style.transition= "background-position 0.8s ease";
        yposition1 = yposition1 + 79;
        rueda1.style.backgroundPositionY= (yposition1)+"px";
        cplay += 1;
        winCondition();

    }
    if(cplay == 3){
        cplay = 0;
        spinButton.disabled = false;
        sspinButton.disabled = false;
        advance1.disabled = true;
        advance2.disabled = true;
        advance3.disabled = true;
    }
    

});

document.getElementById("avanceButton2").addEventListener('click', ()=>{

    if(cplay < 3){
        rueda2.style.transition= "background-position 0.8s ease";
        yposition2 = yposition2 + 79;
        rueda2.style.backgroundPositionY= (yposition2)+"px";
        cplay += 1;
        winCondition();
    }
    if(cplay == 3){
        cplay = 0;
        spinButton.disabled = false;
        sspinButton.disabled = false;
        advance1.disabled = true;
        advance2.disabled = true;
        advance3.disabled = true;
    }

});

document.getElementById("avanceButton3").addEventListener('click', ()=>{

    if(cplay < 3){
        rueda3.style.transition= "background-position 0.8s ease";
        yposition3 = yposition3 + 79;
        rueda3.style.backgroundPositionY= (yposition3)+"px";
        cplay += 1;
        winCondition();
    }
    if(cplay == 3){
        cplay = 0;
        spinButton.disabled = false;
        sspinButton.disabled = false;
        advance1.disabled = true;
        advance2.disabled = true;
        advance3.disabled = true;
    }

});

function winCondition(){
    
    if(yposition1 == yposition2 && yposition2 == yposition3 && nplay == 1){
        console.log("Premio");
        var screem = document.getElementById("screem");
        var slots = document.getElementsByClassName("slot");

        screem.style.animation =" win1 90ms ease-in-out infinite";
        for (var i = 0; i < slots.length; i++) {
            slots[i].style.animation = "win1 90ms ease-in-out infinite";
          }
        setTimeout(() => {
            screem.style.animation = "none";
            for (var i = 0; i < slots.length; i++) {
                slots[i].style.animation = "none";
              }
        }, 2000);

        spinButton.disabled = false;
        sspinButton.disabled = false;
        advance1.disabled = true;
        advance2.disabled = true;
        advance3.disabled = true;
        
        nplay = 0;

    }


};