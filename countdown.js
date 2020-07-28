var deadline = new Date("Jun 1, 2021 15:37:25").getTime(); 
var x = setInterval(function() { 
var now = new Date().getTime(); 
var time = deadline - now; 
var days = Math.floor(time / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((time%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((time % (1000 * 60)) / 1000); 
document.getElementById("birthday").innerHTML = days + "Days "  
+ hours + "Hours " + minutes + "Minutes " + seconds + "Seconds "; 
    if (t < 0) { 
        clearInterval(x); 
        document.getElementById("birthday").innerHTML = "Happy Birthday"; 
    } 
}, 1000); 

    
    
   
    
   




  
