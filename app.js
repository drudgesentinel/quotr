#!/usr/bin/env node
const chalk = require('chalk');
const quotes = require('./quotes.js');

const getRandom = list => {
  return list[Math.floor((Math.random()*list.length))];
}

const randomQuote = getRandom(quotes);
console.log(chalk.blue(`${randomQuote.quote}\n -${randomQuote.author}`));