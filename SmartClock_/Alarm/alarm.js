const hour=document.getElementById("hr")
const minute=document.getElementById("min")
const ap=document.getElementById("ap")
const display=document.querySelector("h1")
const keysDiv=document.querySelector(".keys")
let clock,storeTime,isAlarm=false,audio=new Audio("Alarm Clock Alarm.mp3")
const setAlarm=document.querySelector("button")
for(let i=12;i>=0;i--){
    i=i>=10?i:"0"+i
    let option=`<option value=${i}>${i}</option>`
    hour.firstElementChild.insertAdjacentHTML("afterend",option)
}

for(let i=59;i>=0;i--){
    i=i>=10?i:"0"+i
    let option=`<option value=${i}>${i}</option>`
    minute.firstElementChild.insertAdjacentHTML("afterend",option)
}

for(let i=2;i>0;i--){
    let temp=i==1?"AM":"PM"
    let option=`<option value=${temp}>${temp}</option>`
    ap.firstElementChild.insertAdjacentHTML("afterend",option)
}
function time(){
    clock=new Date();
    displayTime(clock.getHours(),clock.getMinutes(),clock.getSeconds())
}
function displayTime(hour,minute,second){
    let me="AM"
    if(hour>12){
        hour-=12
        me="PM"
    }
    hour=doubleDigit(hour)
    minute=doubleDigit(minute)
    second=doubleDigit(second)
    display.innerHTML=`${hour}:${minute}:${second} ${me}`
    
    if(storeTime==`${hour}:${minute} ${me}`){
        audio.play()
        audio.loop=true
        isAlarm=true
        localStorage.removeItem('alarmTime');
    }
}

function doubleDigit(value){
    return value>=10?value:"0"+value
}

setInterval(time,1000)

setAlarm.addEventListener("click",storeAlarm)

function storeAlarm(){

    if(isAlarm){
        storeTime=""
        audio.pause()
        keysDiv.classList.remove("disable")
        setAlarm.innerText="Set Alarm"
        return isAlarm=false
    }
    let time_temp=`${hour.value}:${minute.value} ${ap.value}`
    if(time_temp.includes("hour") || time_temp.includes("minute") || time_temp.includes("ap")){
        return alert("Invalid Time")
    }
    localStorage.setItem('alarmTime',time_temp)
    storeTime=time_temp
    keysDiv.classList.add("disable")
    setAlarm.innerHTML="Clear Alarm"
    isAlarm=true
    }