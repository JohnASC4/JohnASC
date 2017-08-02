$(document).ready(function() {

    $.ajax({
        url: 'https://swapi.co/api/?format=json' ,
        dataType: 'json',
        success: function(data) {
            console.log(data[0]);
        }
    });
});