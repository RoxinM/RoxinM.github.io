function biggerText() {
  document.getElementById("myTextArea").style.fontSize = "24pt";
}

function fancifyText() {
  if (document.getElementById("FancyShmancy").checked) {
    document.getElementById("myTextArea").style.fontWeight = "bold";
    document.getElementById("myTextArea").style.color = "blue";
    document.getElementById("myTextArea").style.textDecoration = "underline";
  } else {
    document.getElementById("myTextArea").style.fontWeight = "normal";
    document.getElementById("myTextArea").style.color = "black";
    document.getElementById("myTextArea").style.textDecoration = "none";
  }
}

function moo() {
  let textArea = document.getElementById("myTextArea");
  textArea.value = textArea.value.toUpperCase();

  let sentences = textArea.value.split(".");
  for (let i = 0; i < sentences.length - 1; i++) {
    sentences[i] = sentences[i].trim() + "-Moo";
  }
  textArea.value = sentences.join(". ");
}

function setupEventListeners() {
  document.getElementById("biggerButton").onclick = biggerText;
  document.getElementById("FancyShmancy").onchange = fancifyText;
  document.getElementById("BoringBetty").onchange = fancifyText;
  document.getElementById("mooButton").onclick = moo;
}

document.addEventListener("DOMContentLoaded", setupEventListeners);
