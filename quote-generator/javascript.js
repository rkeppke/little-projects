//variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"If you leave hungry it is your damn fault."' ,
    person: 'Steve Gujer'
},{
    quote: '"Tickles! Tickles! Tickles! Tickles! Tickles!"' ,
    person: 'Otto Keppke'
},{
    quote: 'No Tickles! no! NO! ... No Tickles! no! NO! ... "' ,
    person: 'Katelyn Gujer'
},{
    quote: '"Bye bye!! Love you guys!"' ,
    person: 'Lauren Gujer'
},{
    quote: '"Dont count your chickens before they hatch"' ,
    person: 'Megan SG'
},{
    quote: '"Did you take your vitamins!?"' ,
    person: 'Agnes Keppke'
},{
    quote: '"I do the very best I know how - the very best I can and I mean to keep on doing so until the end."' ,
    person: 'Abraham Lincoln'
}]

btn.addEventListener('click', function(){
    //
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});