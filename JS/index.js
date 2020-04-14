
var today = new Date();
var hourNow = today.getHours();
var greeting;

var userName= prompt ('What is your name ?');

var userTime= prompt ('What is the time?');
var userMood= confirm ('Press \'Ok\' if you feel Great today?');

if(userMood==1){
    alert('We\'er glad to know that')
}
else{
    alert(" Eat chocolate and you will jump from happiness!")
}

if (0<=userTime<24); {
hourNow=userTime;
}

if (24> hourNow >= 18) {
    greeting = 'Good evening '+userName;
}
 else if(18 > hourNow > 12) {
    greeting = 'Good afternoon '+userName;
} 
else if(hourNow >= 0){
    greeting = 'Good morning '+userName;
} 
else {
    greeting = 'Welcome '+userName;
}
document.write('<h3>' +greeting+ '</h3>');