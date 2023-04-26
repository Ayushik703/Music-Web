console.log("Welcome to Spotify");

// Initialize the variable 
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "You are Beautiful", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "We don't talk anymore", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "1 2 3 4", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Why is love Complicated?", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "MinMIn - BongBong!", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "BOL4", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Every time i see you", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Done for me", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "First Love", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "I need you Boy!", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItem.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});


// audioElement.play();
// Handle Play/Pause Click 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle-o');
        masterPlay.classList.add('fa-play-circle-o');
        gif.style.opacity = 0;

    }
})

// Listen to event 
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');

    // Update Seekbar 
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
        element.classList.remove('fa-pause-circle-o');
        element.classList.add('fa-play-circle-o')
    });

}


Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src = `./songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
    })
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `./songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle-o');
    masterPlay.classList.add('fa-pause-circle-o');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `./songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle-o');
    masterPlay.classList.add('fa-pause-circle-o');
})

