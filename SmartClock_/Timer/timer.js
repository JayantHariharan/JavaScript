const time=document.getElementById("time")
const start=document.getElementById("start")
const stop=document.getElementById("stop")
const reset=document.getElementById("reset")
const alarmTime=localStorage.getItem('alarmTime')
let hr=0,min=0,sec=0,millsec=0,startTimer
let audio=new Audio("/SmartClock_/Alarm/Alarm Clock Alarm.mp3")
start.addEventListener("click",function(){
    startTimer=true
    watch()
})
stop.addEventListener("click",function(){
    startTimer=false
})
reset.addEventListener("click",function(){
    startTimer=false
    hr=0
    min=0
    sec=0
    display(hr,min,sec)
})

function watch(){
    if(startTimer){
        millsec++
    }
    if(millsec==100){
        sec++
        millsec=0
    }
    if(sec==60){
        sec=0
        min++
    }
    if(min==60){
        hr++
        min=0
        sec=0
    }
    display(hr,min,sec)
    setTimeout(watch,10)
}
function display(hr,min,sec){
    time.innerHTML=`${doubleDigit(hr)}:${doubleDigit(min)}:${doubleDigit(sec)}`
}
function doubleDigit(value){
    return value>=10?value:"0"+value
}
