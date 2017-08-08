var database = firebase.database().ref();


function save(){
    var name = $('#name').val();
    var score = $("#score").val();
    console.log(name + " "+score);

    var value={
        NAME: name,
        SCORE: score
    }
    database.push(value);
}
database.on("child_added",function(rowData){
     var row = rowData.val();
    var name = row.NAME;
    var score = row.SCORE;
    console.log(name+score);
$('h4').empty();
$('h4').append(name +" survived "+ score+" times!");
})
save();
