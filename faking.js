
 
    var randomName = faker.name.findName();
   var  randomEmail= faker.internet.email();
    var randomAddress = faker.address.streetAddress();
    var randomBio= faker.lorem.sentence();
    var randomImage= faker.image.avatar();
 
function Card(){
    document.getElementById("name").innerHTML = name;
    document.getElementById("email").innerHTML = email;
    document.getElementById("address").innerHTML = address;
    document.getElementById("bio").innerHTML = bio;
    document.getElementById("image").src = image
}

Card();