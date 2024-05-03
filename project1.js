// variables

let btn =document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

 
const quotes = [{
    quote:'“The best way to find yourself, is to lose yourself in the service of others.”',
    person: 'Mahatma Gandhi'
},{ 
    quote:'“If you want to live a happy life, tie it to a goal, not to people or things.”',
    person:'Albert Einstein'

},{
    quote:'"At his best, man is the noblest of all animals; separated from law and justice he is the worst."',
    person:'aristotle'
},{
    quote:'"Your time is limited, so dont waste it living someone elses life."',
    person: 'steve Jobs'
},{
    quote:'"Tell me and I forget, teach me and I may remember, involve me and I learn"',
    person:'Benjamin Franklin'
},{
    quote:'"If you look at what you have in life, youll always have more. If you look at what you dont have in life, youll never have enough."',
    person:'oprah winfrey'
},{
    quote:'"It does not matter how slowly you go as long as you do not stop."',
    person:'confucius'
},{
    quote:'"Our lives begin to end the day we become silent about things that matter"',
    person:'martin luther king'
},{
    quote:'"Remember that sometimes not getting what you want is a wonderful stroke of luck."',
    person:'Dalai Lama'
},{
    quote:'"The journey of a thousand miles begins with a single step. Knowing others is intelligence; knowing yourself is true wisdom."',
    person:'lao Tzu'
},];

btn.addEventListener('click' , function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText =quotes[random].person;
})
