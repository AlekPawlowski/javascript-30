window.onload = (e) => {
    const video = document.querySelector("video");
    const playPauseVideo = document.querySelector(".player__button");
    const progressContainer = document.querySelector(".progress");
    const progressBar = document.querySelector(".progress__filled");
    const volumeRangeInput = document.querySelector("[name='volume']");
    const videoSpeed = document.querySelector("[name='playbackRate']");
    const videoSkipPrev = document.querySelector("[data-skip='-10']");
    const videoSkipNext = document.querySelector("[data-skip='25']");

    const videoPlayOrPause = () => {
        video.paused ? video.play() : video.pause();
    };
    const dataSkip = (element) => video.currentTime += parseInt(element.target.dataset.skip)
    const volumeSet = (element) => video.volume = element.target.value;
    const setSpeed = (element) => video.playbackRate = element.target.value;
    const videoHandleProgress = () => {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`;
    };

    const scrub = (e) => {
        const scrubTime = (e.offsetX / progressContainer.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    };

    videoSkipNext.onclick = dataSkip;
    videoSkipPrev.onclick = dataSkip;

    volumeRangeInput.onchange = volumeSet;
    volumeRangeInput.onmousemove = volumeSet;

    videoSpeed.onchange = setSpeed;
    videoSpeed.onmousemove = setSpeed;

    let mousedown = false;
    progressContainer.addEventListener('click', scrub);
    progressContainer.addEventListener('mousemove', (e) => mousedown && scrub(e));
    progressContainer.addEventListener('mousedown', () => mousedown = true);
    progressContainer.addEventListener('mouseup', () => mousedown = false);

    video.onclick = videoPlayOrPause;
    video.ontimeupdate = videoHandleProgress;
    playPauseVideo.onclick = videoPlayOrPause;
};