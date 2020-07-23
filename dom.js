document.getElementById("one").style.color = "green";
document.getElementById("two").style.color = "red";
document.getElementById("three").style.color = "yellow";

function myFuction(){
    var list = document.getElementsByClassName("number")[0];
    list.getElementsByClassName("two")[1].innerHTML = "four";
}

function myFuction(){
    var third = document.getElementsByClassName("two").nextSibling.innerHTML;
    getElementsByClassName("three")[1].innerHTML = "third";
}

document.getElementsById("button").addEventListener("click", displayDate);
function displayDate(){
    document.getElementsById("pretty").innerHTML = Date();
}