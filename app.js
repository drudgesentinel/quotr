#!/usr/bin/env node
const chalk = require('chalk');
const quotes = require('./quotes.js');

const randomArrayItem = list => {
  return list[Math.floor((Math.random()*list.length))];
}

const randomQuote = randomArrayItem(quotes);
console.log(`${chalk.blue(randomQuote.quote)}\n - ${chalk.cyan(randomQuote.author)}`);
