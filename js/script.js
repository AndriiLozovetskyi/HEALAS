let butto1 = document.getElementById("but1");
let butto2 = document.getElementById("but2");
let butto3 = document.getElementById("but3");
let rab1 = document.getElementById("radi1");
let rab2 = document.getElementById("radi2");
let rab3 = document.getElementById("radi3");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
butto1.onclick = function () {
  if (butto1.onclick) {
    rab1.checked = true;
    rab2.checked = false;
    rab3.checked = false;
    card1.style.background =
      "linear-gradient(180deg, #446381 0%, #826F8C 100%)";
    card1.style.transform = "scale(1.05)";
    card1.style.transition = "1s ease";
    card2.style.background = "#FBDACF";
    card2.style.transform = "scale(1)";
    card2.style.transition = "1s ease";
    card3.style.background = "#FBDACF";
    card3.style.transform = "scale(1)";
    card3.style.transition = "1s ease";
    text1.style.color = "white";
    text2.style.color = "#446381";
    text3.style.color = "#446381";
  }  
}
butto2.onclick= function () {
  if (butto2.onclick) {
    rab2.checked = true;
    rab1.checked = false;
    rab3.checked = false;
    card2.style.background ="linear-gradient(180deg, #446381 0%, #826F8C 100%)";
    card2.style.transform = "scale(1.05)";
    card2.style.transition = "1s ease";
    card1.style.background = "#FBDACF";
    card1.style.transform = "scale(1)";
    card1.style.transition = "1s ease";
    card3.style.background = "#FBDACF";
    card3.style.transform = "scale(1)";
    card3.style.transition = "1s ease";
    text2.style.color = "white";
    text1.style.color = "#446381";
    text3.style.color = "#446381";
  }
}
butto3.onclick = function () {
  if (butto3.onclick) {
    rab3.checked = true;
    rab2.checked = false;
    rab1.checked = false;
    card3.style.background ="linear-gradient(180deg, #446381 0%, #826F8C 100%)";
    card3.style.transform = "scale(1.05)";
    card3.style.transition = "1s ease";
    card2.style.background = "#FBDACF";
    card2.style.transform = "scale(1)";
    card2.style.transition = "1s ease";
    card1.style.background = "#FBDACF";
    card1.style.transform = "scale(1)";
    card1.style.transition = "1s ease";
    text3.style.color = "white";
    text2.style.color = "#446381";
    text1.style.color = "#446381";
  }
}

