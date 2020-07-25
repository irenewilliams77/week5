var deadline = new Date("Jun 1, 2021 15:00:00").getTime(); 
var counter = setInterval(function() { 
var now = new Date().getTime(); 
var time = deadline - now; 
var days = Math.floor(time / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((time%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((time % (1000 * 60)) / 1000); 
document.getElementById("count").innerHTML = days + "d "  
+ hours + "h " + minutes + "m " + seconds + "s "; 
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
    if (time < 0) { 
        clearInterval(counter); 
        document.getElementById("count").innerHTML = "Happy Birthday"; 
    } 
}, 1000); 

    
    
   
    
   




  
