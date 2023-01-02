const quoteText = document.getElementById("quoteText");
const btn = document.getElementById("btn");
const author = document.getElementById("author");
let data = [];
async function getQuotes() {
  const res = await fetch("https://type.fit/api/quotes");
  data = await res.json();
  console.log(data[0]);
  newQuote();
}
function newQuote() {
  let randomQuote = data[Math.floor(Math.random() * data.length)];
  !randomQuote.author
    ? (author.textContent = ` -- Unknown`)
    : (author.textContent = `-- ${randomQuote.author}`);
  quoteText.textContent = randomQuote.text;

  randomQuote.text.length > 100
    ? quoteText.classList.add(toolongQuote)
    : quoteText.classList.remove(toolongQuote);
}

btn.addEventListener("click", newQuote);
getQuotes();
