var quotes = [
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you. ",
    author: "Elbert Hubbard",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: " Dr. Seuss",
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: " H. Jackson Brown Jr.",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: " Mahatma Gandhi",
  },
  {
    quote:
      "Insanity is doing the same thing, over and over again, but expecting different results.",
    author: "Narcotics Anonymous",
  },
  {
    quote:
      "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    author: "Marilyn Monroe",
  },
];
var copyQuotes = quotes.slice();
function showQuote() {
  if (copyQuotes.length === 0) {
    copyQuotes = quotes.slice();
  }
  var index = Math.floor(Math.random() * copyQuotes.length);
  var randomQuote = copyQuotes[index];
  copyQuotes.splice(index, 1);
  document.getElementById("quotesContainer").style.display = "block";
  document.getElementById("quote").innerHTML = `<strong>&ldquo;</strong> ${randomQuote.quote} <strong class="right_quotation">&rdquo;</strong>`;
  document.getElementById("author").innerHTML = randomQuote.author;
}
