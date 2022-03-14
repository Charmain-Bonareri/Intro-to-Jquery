$(document).ready(function() {

    $("div#click-one").click(function(event) {
      var whatToSay = "Hello!"; //has a local scope, they are exectued once the function starts and as soon as it is executed it ends.
      alert(whatToSay); //localscope is better.
    });

    $("div#click-two").click(function(event) {
        var whatToSay = "Hey Charm, this is a practise and your learning!"
      alert(whatToSay);
   });
});
 

var globalString= "This is a global variable"

function sampleFunction() {
    console.log(globalString);
    globalString= "This is an update"
    console.log(globalString)
}
console.log(globalString);
sampleFunction();
console.log(globalString);

//the value will be different because when u updated it in a function
//When you change the variable it updates globally
//after you run a function that runs a global function that global function changes
//

function mysampleFunction() {
    var myFavouriteCar= "Vw Toureg";
    console.log(myFavouriteCar);
    myFavouriteCar= "Merceedes"
    console.log(myFavouriteCar)
}
sampleFunction();
console.log(myFavouriteCar)


function sampleFunction() {
    var localString="This is a local variable"
    console.log(localString);
    localString = "This is a local variable update"
    console.log(localString)
}
sampleFunction();
console.log(localstring)