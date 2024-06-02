const quotes = require('./quotes.json');

let currentQuote = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];

console.log(currentQuote.quote);
console.log(`- ${currentQuote.author} -`);