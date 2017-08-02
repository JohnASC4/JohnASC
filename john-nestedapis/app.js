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
    $('h2').append(lName);
     var userCountryCode = data.results[0].nat
     console.log(data.results[0]);
     
     
     $.ajax({
    url: 'https://restcountries.eu/rest/v2/alpha?codes='+ userCountryCode,
    dataType:'json',
    success: function(data) {
        console.log(data[0].name);
        var country= data[0].name;
        $('body').append(country);
  }
})

    }
})
});
