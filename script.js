const video = document.querySelector('video');
const progress = document.querySelector('progress');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const volume = document.querySelector('#volume');
const speed = document.querySelectorAll('.speed');
const back = document.querySelector('#back');
const forward = document.querySelector('#forward');

play.addEventListener('click', function play() {
    video.play();
});

pause.addEventListener('click', function pause() {
    video.pause();
});

function togglePlay() {
    if(video.paused) {
        video.play()
        return
    }
    video.pause();

};

video.addEventListener('click', togglePlay);

document.addEventListener('keydown', function(e) {
    if(e.code === 'Space') {
        togglePlay();
    }
});

volume.addEventListener('input', function changeVolume() {
    video.volume = volume.value;
});

function setSelected(e){
    video.play();
    video.playbackRate = e.target.getAttribute('data-speed')
};

speed.forEach(function(button) {
    button.addEventListener('click', setSelected);

});

function updateProgress() {
    if(video.currentTime > 0) {
        progress.value = video.currentTime / video.duration;
    }
}

video.addEventListener('timeupdate', updateProgress);

back.addEventListener('click', function back() {
    video.currentTime -= 5;
});
forward.addEventListener('click', function forward() {
    video.currentTime = video.currentTime + 5;

});