import {getRandomNum, lang, defineLanguage} from './script.js';

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

export default async function getQuotes() {
    defineLanguage();

    if (lang === 'ru') {
    const quotes = 'quotes-ru.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    const min = 0;
    const max = data.quotes.length-1;
    const quoteNum = getRandomNum(min, max);
    const quoteAuthor = quoteNum;

    quote.textContent = data.quotes[`${quoteNum}`].quote;
    author.textContent = data.quotes[`${quoteAuthor}`].author;
    }
    if (lang === 'en') {
    const quotes = 'quotes-en.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    const min = 0;
    const max = data.quotes.length-1;
    const quoteNum = getRandomNum(min, max);
    const quoteAuthor = quoteNum;
    
    quote.textContent = data.quotes[`${quoteNum}`].quote;
    author.textContent = data.quotes[`${quoteAuthor}`].author;
    }

    
    changeQuote.addEventListener('click', getQuotes);
}
