var i = 0; //  set your counter to 1
const title = document.getElementById("lord");

const arrayOfText = [
  "After Dark",
  "As the hours pass",
  "I will let you know",
  "That I need to ask",
  "Before I'm alone",
  "How it feels to rest",
  "On your patient lips",
  "To eternal bliss",
  "I'm so glad to know",
  "...",
];

function myLoop() {
  //  create a loop function
  setTimeout(function () {
    //  call a 3s setTimeout when the loop is called
    title.innerHTML = arrayOfText[i]; //  your code here
    i++; //  increment the counter
    if (i < 10) {
      //  if the counter < 10, call the loop function
      myLoop(); //  ..  again which will trigger another
    } //  ..  setTimeout()
  }, 2000);
}

myLoop();
