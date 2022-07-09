// span met "er zijn geen tickets beschikbaar"
if(document.getElementsByClassName("css-y9qk84 e6fq7ah0").length < 1) {
  let audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
  //audio.crossOrigin = "anonymous";
  audio.play();
}

// testfunc: play sound if the
// if(document.getElementsByClassName("css-y9qk84 e6fq7ah0").length == 1) {
//   let audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
//   audio.play();
// }
