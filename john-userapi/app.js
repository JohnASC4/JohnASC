$(document).ready(function() {
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    // console.log(data.results[0].name.first
    // );
    var userFirstName = data.results[0].name.first;
    console.log(userFirstName);
    $('h1').append(userFirstName);
    var lName = data.results[0].name.last;
    console.log(lName);
    $('body').append(lName);
     console.log(data.results[0]).picture.thumbnail;
    var headshot = data.results[0].picture.thumbnail;
    $('body').append('<img src="+ headshot + ">"');
  }
});
});  

