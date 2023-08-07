const play=document.getElementById("play")
const previous=document.getElementById("prev")
const next=document.getElementById("next")
const songName=document.getElementById("song")
const imgPic=document.querySelector("img")
let playMusic=false,track=0
const songList=['Attack on titan.mp3','Demon Slayer.mp3','Halsey.mp3','Hell Paradise.mp3','Shinunoga.mp3']
let audio=new Audio()
play.addEventListener("click",play_pause)
previous.addEventListener("click",previousSong)
next.addEventListener("click",nextSong)
function play_pause(){
    playMusic?pauseTask():playTask()
}
function playTask(){
    songName.innerHTML=songList[track].replace(".mp3","")
    audio = new Audio(songList[track]);
    audio.play();
    playMusic = true;
    play.classList.replace("fa-play", "fa-pause");
    imgPic.classList.add("anime");
}
function pauseTask(){
  playMusic = false;
  audio.pause();
  play.classList.replace("fa-pause", "fa-play");
  imgPic.classList.remove("anime");
}
function previousSong() {
    pauseTask()
    track = (track - 1 + songList.length) % songList.length;
    playTask();
  }
  
  function nextSong() {
    pauseTask()
    track = (track + 1) % songList.length;
    playTask();
  }