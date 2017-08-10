var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

$(document).ready(function() {
$.ajax({
  url: 'https://www.googleapis.com/plus/v1/',
  dataType: 'json',
  success: function(data) {
      var userFirst = data[0];
console.log(userfirst);

//   var userFirstName = data.results[0].name.first;
//     console.log(userFirstName);
//     $('h1').append(userFirstName);
//     var lName = data.results[0].name.last;
//     console.log(lName);
//     $('body').append(lName);
//      console.log(data.results[0]).picture.thumbnail;
//     var headshot = data.results[0].picture.thumbnail;
//     $('body').append('<img src="+ headshot + ">"');
  }
});
});  

   