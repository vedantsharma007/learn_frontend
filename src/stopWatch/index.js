

let seconds;
let minutes;
let time = document.getElementById('timer');
let diff;
let min;
function incrementSeconds() {
        seconds += 1;
        time.innerText = minutes + ":" + seconds;
    
    }
    function incrementMinutes(){
        minutes+=1;
        seconds=0;
        time.innerText = minutes+":"+seconds;
    }
//****************************************** START FUNCTION *********************************************************** */
function start() {
    seconds = 0;
    minutes = 0;
    


    diff = setInterval(incrementSeconds, 1000);
    min=setInterval(incrementMinutes,60000);
    document.getElementById('start').disabled = true;
    document.getElementById('resume').disabled = true;
    document.getElementById('stop').disabled = false;
    
}

//******************************************************* STOP FUNCTION ************************************************//
function stop() {
    clearInterval(diff);
    clearInterval(min);
    document.getElementById('stop').disabled = true;
    document.getElementById('resume').disabled = false;
    document.getElementById('start').disabled = false;
}


//******************************************************* RESUME FUNCTION **************************************************//

function resume() {
    diff = setInterval(incrementSeconds, 1000);
    min=setInterval(incrementMinutes,60000);
    document.getElementById('stop').disabled = false;
    document.getElementById('resume').disabled = true;
    document.getElementById('start').disabled = true;
}

addEventListener('mouseover',()=>{
  document.getElementById('heading').style.color='blue';
  document.body.style.backgroundColor='lightgrey';
});
addEventListener('mouseout',()=>{
  document.getElementById('heading').style.color='black';
  document.body.style.backgroundColor='#7ba7bc';
});