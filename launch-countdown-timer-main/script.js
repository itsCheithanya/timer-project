/*
var days=document.querySelector("#days");
var hours=document.querySelector("#hours");
var minutes=document.querySelector("#minutes");
var seconds=document.querySelector("#seconds");

 let daysminus=days.innerText;
 let hoursminus=hours.innerText;
 let minutesminus=minutes.innerText;
 let secondsminus=seconds.innerText;

 
setInterval(()=>{ 
    if(daysminus>0){
    daysminus--;
}else{
    daysminus=0;
}},86400000);

setInterval(()=>{
    if(hoursminus>0){
        hoursminus--;
        hours.innerText=hoursminus;
    }else{
        hoursminus=24;
        hours.innerText=hoursminus;
    }
    
   
},3600000);

setInterval(()=>{ 
    if(secondsminus>0){
        secondsminus--
        seconds.innerText=secondsminus;
    }else{
        minutesminus--;
       secondsminus=60;
       
       minutes.innerText=minutesminus;
       seconds.innerText=secondsminus;
       
    }
   },1000);
   setInterval(()=>{
    if(minutesminus>0){
    //    console.log(minutesminus);
    minutesminus--;
    minutes.innerText=minutesminus;
    }else{
       minutesminus=60;
       minutes.innerText=minutesminus;
       hoursminus--;
        hours.innerText=hoursminus;
    }
   },60000);
*/
   
  
    var days = document.querySelector("#days");
var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");

var startCount = [ 1, 1, 1, 10 ];

setInterval(() => {
    startCount[3] -= 1;

    if (startCount[3] < 0) {
        startCount[3] = 60;
        startCount[2] -= 1;
    }

    if (startCount[2] < 0) {
        startCount[2] = 60;
        startCount[1] -= 1;
    }

    if (startCount[1] < 0) {
        startCount[1] = 24;
        startCount[0] -= 1;
    }

    if (startCount[0] < 0) {
        startCount[0] = 0;
    }

    

    days.innerHTML = startCount[0];
    hours.innerHTML =  startCount[1];
    minutes.innerHTML =  startCount[2];
    seconds.innerHTML =  startCount[3];

}, 1000);