console.log("welcome");

let songIndex = 0;
let audioElement =  new Audio('songs/1.mp3');
let playButton = document.getElementById('playButton');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songName = document.getElementById('songName');

let songs =[
    {songName: " Wallermen", filePath: "songs/1.mp3", coverPath: "cover/wallerman.pgep"},
    {songName: " Maiyya Mainu", filePath: "songs/2.mp3", coverPath: "cover/maiyyamainu.jpg"},
    {songName: " Kesariya", filePath: "songs/3.mp3", coverPath: "cover/kesariya.jpg"},
    {songName: " Rabba Maher Kari", filePath: "songs/4.mp3", coverPath: "cover/maherkari.jpg"},
    {songName: " Kaise Hua", filePath: "songs/5.mp3", coverPath: "cover/kaisehua.pgep"},
    {songName: " Tajdare Haram", filePath: "songs/6.mp3", coverPath: "cover/tajdareharam.jpg"},
    {songName: " Aafreen Aafreen", filePath: "songs/7.mp3", coverPath: "cover/aafreen.jpg"},
]

playButton.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        playButton.classList.remove('fa-circle-pause');
        playButton.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value* audioElement.duration/100;
})

const allPlay =()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
};


Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        allPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        songName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
    })
})
    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>=7){
            songIndex = 0
        }else{
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        songName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
    })
    document.getElementById('prev').addEventListener('click',()=>{
        if(songIndex<=0){
            songIndex = 0
        }else{
            songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        songName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
    })