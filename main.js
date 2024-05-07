console.clear();
// Setting constant variables such as buttons, text field etc
const quoteParagraphTag = document.getElementById("quotes");
const authorParagraphTag = document.getElementById("author");
const imageDiv = document.getElementById("images");
const pause = document.getElementById("pause");
const playback = document.getElementById("playAgain");

const newQuoteButton = document.getElementById("new-quote-generator");

let isSpeaking = false;
let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
speech.volume = 1;
speech.rate = 0.9;
speech.pitch = 1;

//create quotes to generate
const quotes = [
  {
    quote: "I\'m not a businessman, I\'m a business, man",
    author: "Jay-Z",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQDYqvGWFDJkjxNZCrkqq4bZRKOFR4hC_9A&usqp=CAU"
  },
  {
    quote: "I\'m not lazy, I\'m just on my own schedule",
    author: "Adam Sandler",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6oLTsOrJ6tmRjmBvZfcvGyMVl72RSe2JUkw&usqp=CAU"
  },
  {
    quote: "Da da da da da",
    author: "Snoop Dogg",
    img:
      "https://i.pinimg.com/736x/e4/5f/40/e45f401e2d083048c3d6e725704d0619.jpg"
  },
  {
    quote: "I dont hate it. I just dont like it at all, and its terrible",
    author: "Michael Scott",
    img:
      "https://miro.medium.com/v2/resize:fit:620/1*RpQjmNQ-ORXkQaOX7zlbZw.png"
  },
  {
    quote: "Can you smell? What the Rock is cookin! ",
    author: "Dwayne Johnson",
    img:
      "https://img.mensxp.com/media/content/2022/Jul/header-credit-WWE_62bec7baecb00.jpeg?w=414&h=276&cc=1"
  },
  {
    quote: "I\'m not giving up, I\'m just changing my approach",
    author: "Rocky Balboa",
    img:
      "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2014/12/rocky_balboa.jpg"
  },
  {
    quote: "I\'m not a bad person, I\'m just drawn that way",
    author: "The Joker",
    img: "https://lucien0maverick.files.wordpress.com/2011/06/another-joker.jpg"
  },
  {
    quote:
      "It is better to risk starving to death then surrender. If you give up on your dreams, what's left? ",
    author: "Jim Carrey",
    img:
      "https://people.com/thmb/aM7V1ZAEwYSZt82tT36w2WgCSC4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/jim-carey-a15299a193694707956cffb0659d444a.jpg"
  }
];

function displayRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quoteParagraphTag.innerHTML = quotes[randomIndex].quote;
  authorParagraphTag.innerHTML = quotes[randomIndex].author;
  const imageTag = document.createElement("img");
  imageTag.src = quotes[randomIndex].img;
  const existingImg = imageDiv.querySelector("img");

  if (existingImg) {
    existingImg.remove();
  }
  imageDiv.appendChild(imageTag);
  imageTag.classList.add("small");
  speak(quotes[randomIndex].quote);
}

//adding click eventList to my button
newQuoteButton.addEventListener("click", (event) => {
  window.speechSynthesis.cancel();
  // need to get a random item from my array of objects(quotes)
  // using math random and * to length of array to get a random value to represent selected index
  let randomIndex = Math.floor(Math.random() * quotes.length);
  // adding HTML to my quote & author <p> tags
  quoteParagraphTag.innerHTML = quotes[randomIndex].quote;
  authorParagraphTag.innerHTML = quotes[randomIndex].author;

  // Manipulating DOM to create new img tag and set src attr
  const imageTag = document.createElement("img");
  imageTag.src = quotes[randomIndex].img;
  const existingImg = imageDiv.querySelector("img");

  if (existingImg) {
    existingImg.remove();
  }
  //new image tag will be appended to an empty div
  imageDiv.appendChild(imageTag);
  imageTag.classList.add("small");
  speak(quotes[randomIndex].quote);
});




function speak(message) {
  //configuring the pronouncement/utterence that will be used
  speech.text = message;
  // setting window. Speech synthesis is the main controller for interface of creating speech, generating, etc
  window.speechSynthesis.speak(speech);
}

//setting up pause button
pause.addEventListener("click", pauseText);
function pauseText() {
  if (speechSynthesis.speaking) {
    speechSynthesis.pause();
  }
}

playback.addEventListener("click", playAgain);
function playAgain() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
  }
  speechSynthesis.speak(speech); // this should play it again
}


displayRandomQuote();
