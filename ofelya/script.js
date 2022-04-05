console.log("hello");
document.addEventListener("DOMContentLoaded", () => {
  const aud = document.querySelector("audio");
  aud.addEventListener("canplay", (a) => {
    aud.play();
  });
  const small = document.querySelector(".small");
  const arr = ["1.avif", "2.jpeg", "3.jpeg", "4.jpeg", "4.jpeg"];
  let counter = 0;
  setInterval(() => {
    if (counter >= 4) {
      counter = 0;
    } else {
      counter++;
    }
    small.style.background = `url(./assets/${arr[counter]}) center center/cover no-repeat`;
  }, 5000);
});
