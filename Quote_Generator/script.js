const apiUrl =
  "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "YOUR_API_KEY",
    "x-rapidapi-host": "quotes15.p.rapidapi.com",
  },
};
const quote = document.querySelector(".quote")
const author = document.querySelector(".author")
const newQuote = document.querySelector('.btn1');
const tweetBtn = document.querySelector('.btn2')

async function getQuote(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.originator.name;
  } catch (error) {
    console.error(error);
  }
}

getQuote(apiUrl, options);

newQuote.addEventListener('click', () => getQuote(apiUrl, options))

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=\"" + quote.innerHTML + "\"%0A- " + author.innerHTML, "Tweet Window", "width=600, height=300")
}

tweetBtn.addEventListener('click', () => tweet())