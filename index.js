function changenum() {
  var randomnumber1 = Math.floor(Math.random() * 6) + 1;
  var randomnumber2 = Math.floor(Math.random() * 6) + 1;
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  if (randomnumber1 === 1) {
    img1.src = "/images/dice1.png";
  } else if (randomnumber1 === 2) {
    img1.src = "/images/dice2.png";
  } else if (randomnumber1 === 3) {
    img1.src = "/images/dice3.png";
  } else if (randomnumber1 === 4) {
    img1.src = "/images/dice4.png";
  } else if (randomnumber1 === 5) {
    img1.src = "/images/dice5.png";
  } else {
    img1.src = "/images/dice6.png";
  }
  if (randomnumber2 === 1) {
    img2.src = "/images/dice1.png";
  } else if (randomnumber2 === 2) {
    img2.src = "/images/dice2.png";
  } else if (randomnumber2 === 3) {
    img2.src = "/images/dice3.png";
  } else if (randomnumber2 === 4) {
    img2.src = "/images/dice4.png";
  } else if (randomnumber2 === 5) {
    img2.src = "/images/dice5.png";
  } else {
    img2.src = "/images/dice6.png";
  }
  if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player1 wins!";
  } else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player2 wins!";
  } else {
    document.querySelector("h1").innerHTML = "Tie!";
  }
}
