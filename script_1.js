const text = `They say Propose Day is about honesty.
About courage.
About finally saying what’s been unsaid.

So here it is.

Are you Short?`;

let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 45);
  } else {
    document.getElementById("buttons").style.display = "flex";
  }
}

function bait() {
  const reveal = document.getElementById("reveal");
  reveal.innerHTML = `
    😈 GOTCHA.<br><br>
    I WAS JUST RAGE BAITING YOU.<br>
    <br><br>
    Calm down. Breathe. 🌱
  `;
  reveal.style.opacity = 1;
  document.getElementById("buttons").style.display = "none";
}

window.onload = typeEffect;
