const dateDiv=document.getElementById("date_div")
const timeDiv=document.getElementById("time")
const dayDiv=document.getElementById("day")
const imgUrl=document.querySelector(".content")
const alarm=document.getElementById("alarm")
const timer=document.getElementById("timer")
const music=document.getElementById("music")
const images=['url("img1.jpg")','url("img2.jpg")','url("img3.jpg")','url("img4.jpg")','url("img5.jpg")']
let clock,mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
setInterval(backgroundDisplay,5000)
setInterval(display,1000)
function backgroundDisplay(){
        const bg=images[Math.floor(Math.random()*images.length)]
        imgUrl.style.backgroundImage=bg

    }

function display(){
    clock=new Date()
    dmy(clock.getDate(),clock.getMonth(),clock.getFullYear(),clock.getDay())
    displayTime(clock.getHours(),clock.getMinutes(),clock.getSeconds())
}
function dmy(date,month,year,dayTemp){
    dateDiv.innerHTML=`${date} ${mL[month].toUpperCase()} ${year}`
    dayDiv.innerHTML=`${days[dayTemp]}`
}
function displayTime(hour,minute,second){
    let me="AM"
    if(hour>12){
        hour-=12
        me="PM"
    }
    time.innerHTML=`${doubleDigit(hour)}:${doubleDigit(minute)}:${doubleDigit(second)} ${me}`
}

function doubleDigit(value){
    return value>=10?value:"0"+value
}

alarm.addEventListener("click",function(){
    window.location.href="/SmartClock_/Alarm/alarm.html"
})

timer.addEventListener("click",function(){
    window.location.href="/SmartClock_/Timer/timer.html"
})
music.addEventListener("click",function(){
    window.location.href="/SmartClock_/Music/music.html"
})
