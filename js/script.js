/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

Patrick S. Flynn - April 2021
******************************************/


/*
Define different quote objects within array
"favorite" color was added to give the code some personality!
*/

const quotes = [
  {
    quote: "That's not what I wanted you working on...",
    source: "Robert Adams",
    citation: undefined, 
    year: 2014,
    color: 'RGB(107, 100, 81)',
  },
  {
    quote: "Wham! Slam! Bam! Football! Touchdown!",
    source: "Jay Beach",
    citation: undefined, 
    year: 2013,
    color: 'RGB(96, 168, 116)',
  },
  {
    quote: "Veni, Vidi, Vici - Live, Laugh, Love",
    source: "Ally Pretzler",
    citation: "Pantasy Fruncher",
    year: 2019,
    color: 'RGB(217, 128, 205)',
  },
  {
    quote: "Thanks FC",
    source: "Somebody on the internet (probably)",
    citation: undefined, 
    year: undefined,
    color: 'RGB(101, 142, 219)',
  },
  {
    quote: "I'll be right back, I'm going to go re-paint the bathroom walls!",
    source: "Patrick Flynn",
    citation: undefined, 
    year: 2019,
    color: 'RGB(219, 24, 40)',
  },
  {
    quote: "Here are your 'Cut-the-line' passes sirs!",
    source: "Ignacious",
    citation: "Celebrity Edge",
    year: 2019,
    color: 'RGB(188, 214, 86)',
  }
]

//We will run the printQuote initially so the default quote is never shown
printQuote();


//Pass in a quote array as parameter (in case we ever want to use another array)
function getRandomQuote(quoteArray){

  const arrLength = quoteArray.length;
  //Utilizing floor ensures we always get indicies 0 as well as length-1 of array
  const randomIndex = Math.floor(Math.random() * quoteArray.length);

  return quoteArray[randomIndex]

}


function printQuote(){

  const selected_quote = getRandomQuote(quotes);
  document.querySelector('.quote').innerHTML = selected_quote.quote;

  //default quote source without citation/year
  attribution = `${selected_quote.source}`
  
  //check both citation and year properties to ensure they are defined
  if (selected_quote.citation){
    attribution += `<span class="citation">${selected_quote.citation}</span>`
  }
  
  if (selected_quote.year){
    attribution += `<span class="year">${selected_quote.year}</span>`
  }

  document.querySelector('.source').innerHTML = attribution

  //This adds a unique personality flair to each quote but can be removed for default BG color
  document.querySelector('body').style.backgroundColor = selected_quote.color;

}



//Default click listener -- leave in place per instructions
document.getElementById('load-quote').addEventListener("click", printQuote, false);