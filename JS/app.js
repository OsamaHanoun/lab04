' use strict'
var today = new Date();
var hourNow = today.getHours();
var greeting;

var userName = prompt('What is your name?');
var userTime = prompt('What is the time?');



if (0 <= userTime < 24); {
    hourNow = userTime;
if (24 > hourNow >= 18) {
    greeting = 'Good evening ' + userName;
}
else if (18 > hourNow > 12) {
    greeting = 'Good afternoon ' + userName;
}
else if (hourNow >= 0) {
    greeting = 'Good morning ' + userName;
} 
}
else {
    greeting = 'Welcome ' + userName;
}


var userMood = confirm('Press \'Ok\' if you feel Great today?');
var answer;
if (userMood === true) {
    answer = "We're+glad+to+know+that+you're+feeling+great";
}
else {
    answer = 'Eat+chocolate+and+you+will+jump+from+happiness!';
}

function imgText(text) {
    var fullLink = 'https://dummyimage.com/2000x200/ccafaf/000000.png&text=' + text;
    document.write('<img class= "imgText" src="' + fullLink + ' ">');
}

var numHearts = prompt('Write a number from 1-10 to express your love to chocolate?')

function heartSymboles() {
    var text = ''
    if (1 <= numHearts <= 10) {

        for (let i = 0; i < numHearts; i++) {
            text = text + ' ♥ ';
        }
    }
    else {
        
        for (let i = 0; i < 10; i++) {
            text = text + ' ♥ ';
        }
        
    }
    imgText(text);
}
