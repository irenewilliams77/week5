var renaissanceWomenInScience = {

    title: "Renaissance Women In Science",
    authorName: "Louise Q. Van Der Does and Rita J. Simon",
    genre:"biography",
    shortDescription: "Biograpy of various women scientists ranging from 1818 to 1994. How their discoveries impacted science today",
    price: "10",
    seller: "University Press of America, Inc. ",

     buyNow :function(){
        return this.price + this.title;
    
    
    }
        
}
console.log(renaissanceWomenInScience.buyNow());


