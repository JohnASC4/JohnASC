var database = firebase.database().ref();

var myFBref = new Firebase("https://highscore-game.firebaseio.com");
function save(){
   var newScore = {};
   newScore.name = document.getElementById("name").value;
   newScore.score = document.getElementById("score").value;
   myFBref.set(newScore);
}
save();
