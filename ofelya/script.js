$(document).ready(() => {
  const small = document.querySelector(".small");
  const arr = ["1.avif", "2.jpeg", "3.jpeg", "4.jpeg", "4.jpeg"];
  // const aud = new Audio("./assets/music.mp3");
  // console.log(aud);
  // aud.audio.play();
  var audio = document.createElement("AUDIO");
  document.body.appendChild(audio);
  audio.src = "./assets/musicc.mp3";
  audio.loop = true;
  document.addEventListener("click", () => {
    audio.play();
  });
  let counter = 0;
  setInterval(() => {
    if (counter >= 4) {
      counter = 0;
    } else {
      counter++;
    }
    console.log(arr[counter]);
    try {
      small.style.background = `url(./assets/${arr[counter]}) center center/cover no-repeat`;
    } catch (error) {
      console.log(error);
    }
  }, 5000);
});
