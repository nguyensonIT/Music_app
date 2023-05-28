var audio = document.getElementById("myAudio");
var playBtn = document.getElementById("playBtn");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var sources = audio.getElementsByTagName("source");
var progressBar = document.getElementById("progressBar");
var songTitle = document.getElementById("songTitle");
var currentSourceIndex = 0;
var isPlaying = false;

audio.addEventListener("ended", function () {
    playNext();
});

audio.addEventListener("timeupdate", function () {
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

function playNext() {
    currentSourceIndex++;
    if (currentSourceIndex >= sources.length) {
        currentSourceIndex = 0;
    }
    audio.src = sources[currentSourceIndex].src;
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    updateSongTitle();
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        audio.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    isPlaying = !isPlaying;
    updateSongTitle();
}

function playPrevious() {
    currentSourceIndex--;
    if (currentSourceIndex < 0) {
        currentSourceIndex = sources.length - 1;
    }
    audio.src = sources[currentSourceIndex].src;
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    isPlaying = true;
    updateSongTitle();
}

function updateProgressBar() {
    var progress = progressBar.value;
    var duration = audio.duration;
    var currentTime = (progress / 100) * duration;
    audio.currentTime = currentTime;
}

function updateSongTitle() {
    var currentSource = sources[currentSourceIndex];
    var songName = currentSource.getAttribute("data-name");
    songTitle.innerText = songName;
}

// change background

function changeBackgroundColor() {
    var body = document.querySelector("body");
    var colorBtn = document.getElementById("colorBtn");

    // Tạo một mảng các màu nền có thể thay đổi
    var colors = [
        "linear-gradient(45deg, #FF3F4C, #FFBD69)",
        "linear-gradient(45deg, #FFD700, #52D9FF)",
        "linear-gradient(45deg, #8B78E6, #00FF00)",
        "linear-gradient(45deg, #FF1493, #00CED1)",
        "linear-gradient(45deg, #FFA500, #FF00FF)",
        "linear-gradient(45deg, #FF00FF, #FFA500)",
        "linear-gradient(45deg, #52D9FF, #FF3F4C)",
        "linear-gradient(45deg, #00FF00, #8B78E6)",
        "linear-gradient(45deg, #00CED1, #FF1493)",
        "linear-gradient(45deg, #FFFF00, #FF00FF)",
        "linear-gradient(45deg, #FFBD69, #FF3F4C)",
        "linear-gradient(45deg, #FF3F4C, #52D9FF)",
    ];

    // Tạo một số ngẫu nhiên để chọn màu nền mới
    var randomIndex = Math.floor(Math.random() * colors.length);
    var newColor = colors[randomIndex];

    // Thay đổi màu nền của phần tử audio-player
    body.style.background = newColor;

    // Thay đổi màu chữ của nút khi màu nền thay đổi
    if (newColor === "linear-gradient(45deg, #FFFF00, #FF00FF)") {
        // colorBtn.style.color = "#000000";
        // songTitle.style.color = "#000000";
    } else {
        // colorBtn.style.color = "#ffffff";
        // songTitle.style.color = "#ffffff";
    }
}
