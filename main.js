// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

//document.querySelectorAll("like-glyph").addEventListener('click',() => console.log("asdfsadfsdf"))

console.log(document.getElementsByClassName("like"))

//console.log(mimicServerCall())
btns = document.getElementsByClassName("like")
btns.forEach(element => { element.addEventListener('click', mimicServerCall())
  if (failure) {
    document.getElementById("modal").classList.toggle("")
    }
  else {
    btns.innerHTML = FULL_HEART
  }
  })
  
  