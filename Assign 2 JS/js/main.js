var quotes = [` “Be yourself; everyone else is already taken.” <br> <br>
― Oscar Wilde`, ` “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br> <br>
― Albert Einstein`, ` “A room without books is like a body without a soul.” <br> <br>
― Marcus Tullius Cicero`, ` “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br> <br>
― Bernard M. Baruch`, `“Be the change that you wish to see in the world.” <br> <br>
― Mahatma Gandhi`
];



function getQuote() {
    
    var randomnumber = Math.floor(Math.random() * (quotes.length))  ;
    document.getElementById('quote').innerHTML = quotes[randomnumber];
    buttoncolor();
}


function buttoncolor() {
    document.getElementById('button').style.backgroundColor = 'green';
}