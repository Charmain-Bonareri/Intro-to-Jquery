// Basic syntax is: $(selector).action()

// A $ sign to define/access jQuery
// A (selector) to "query (or find)" HTML elements
// A jQuery action() to be performed on the element(s)


// $(document).ready(function(){   - This is a document ready event: //.ready function will call the load function
//     jQuery methods go here...
  //   });

// This is to prevent any jQuery code from running before the document is finished loading (is ready).

$(document).ready(function(){
$('h1.header1').click(function(){ //If you click somewhere, it will tell you what type of HTML element you clicked on
    alert("This is our first Header!")
});

   $("p.p1").click(function() {
    alert("This is a paragraph.");
    alert("This is actually us coding with jQuery!")
});
//Now, we can use jQuery to show the image below when you click the paragraph above it:

   $("img#img1").click(function() {
    alert("This is an image.");
});

   $("p.p2").click(function() {
    $("img#img2").show();
});
 
//   $("p.p3").click(function() {
//     $(".image-showing").toggle();
//     $(".image-hidden").toggle();
//   });

  $(".clickable").click(function() {
    $("#image-showing").toggle();
    $("#image-hidden").toggle();
});

//   $('btn-light').click(function(){
//     $('.btn-dark').toggle();  
// });
//Let us try and use the arrow function for the above function.


//We want to try and change the backgro
$('.btn-light').click(()=>{
    $('.btn-dark').toggle();  
    $('.btn-light').toggle();
    $('body').removeClass('bg-color');
 });

//   $('.btn-dark').click(function(){
//     $('.btn-light').toggle();
//       });

$('.btn-dark').click(()=>{
    $('.btn-light').toggle();
    $('.btn-dark').toggle(); 
    $('body').removeClass();
    $('body').addClass('bg-color');
   });


// the above code helped us change our mode from dark mode to light mode
//note that alot of the scoping we are using is local scoping

//mouseover event
$('img#girlcode1').mouseover(function(){
alert("This is an amazing girl coding #thefutureisfemale")
});

//mouseout event
$('p#pmouseout1').mouseout(function(){
    alert('This is an image of a moringa student coding')
})

// //hover
// $('h1').hover(()=>{
//     alert('This is a hover effect')
// }),
// ()=>{
//     alert('Aight,Imma head out!');
// }


//fadein effect
$('h1#hfadein').click(function(){
    $('p.fadeIn').fadeIn(slow);
});

let overlayTotalNumber =(
    $(".overlay").toArray().length
  );
  
  for(let overlayNumber = 1; overlayNumber<=overlayTotalNumber;overlayNumber++){
    $(`#overlay${overlayNumber}`).mouseover(function() {
    $(`#overlay${overlayNumber} > img`).addClass("overlay-effect");
    $(`#work-overlay${overlayNumber}`).toggle();
  }).mouseout(function(){
    $(`#overlay${overlayNumber} > img`).removeClass("overlay-effect");
    $(`#work-overlay${overlayNumber}`).toggle();
  });
  }  

  let cardTotalNumber =(
    $(".card").toArray().length
  );
  
  for(let cardNumber = 1; cardNumber<=cardTotalNumber;cardNumber++ ){
    $(`.card${cardNumber}`).click(function() {
        $(`.card-show${cardNumber}`).toggle(400);
        $(`.card-hidden${cardNumber}`).toggle(400);
      });
  }

});