
 
    var randomName = faker.name.findName();
   var  randomEmail= faker.internet.email();
    var randomAddress = faker.address.streetAddress();
    var randomBio= faker.lorem.sentence();
    var randomImage= faker.image.avatar();
 
function Card(){
    document.getElementById("name").innerHTML = randomName;
    document.getElementById("email").innerHTML = randomEmail;
    document.getElementById("address").innerHTML = randomAddress;
    document.getElementById("bio").innerHTML = randomBio;
    document.getElementById("image").src = randomImage
}

Card();

