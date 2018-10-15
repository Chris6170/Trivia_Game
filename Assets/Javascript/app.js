var responses = []
var number = 45;
var intervalId;
var answers = ["C", "B", "A", "D", "C", "D", "B", "C", "A", "D"];
var tot = answers.length;
var resultsI = $("#results")


$(document).ready(function () {

  $("#splash").show();
  $("#content").hide();
})

$("#start").on('click', run);

function run() {
  $("#content").show();
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {

  number--;
  $("#time").html(number);

  if(number === 0){
    clearInterval(intervalId)
    getCheckedValue();
    returnScore()
  
  
   }

}

 


$("#done").on('click', function () {
  clearInterval(intervalId)
  getCheckedValue();
  returnScore()
 
 })
 
 
 function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName );
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value;
 }
 
 function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1;
  return score;
 }
 
 function returnScore(){
  var score = getScore()
  if (score === 9) {
 
    $("#splash").hide();
    $("#content").hide();
    var image1 = $("<img>");
    var text = $("<h1>");
 
    image1.attr('src', 'https://media1.giphy.com/media/rNgT8P8pL3dn2/giphy.gif?cid=3640f6095bc3b7473568533851077574');
    image1.css('height', "500px");
    image1.css('height', "500px")
    resultsI.append(image1);
    text.html("You know that I know, that you know Denzel!");
    resultsI.append(text);
 
  }
 
  if (score < 9 && score >= 6) {
 
    $("#splash").hide();
    $("#content").hide();
    var image1 = $("<img>");
    var text = $("<h1>");
 
    image1.attr('src', 'https://media3.giphy.com/media/VJ2B0I6t2HEUE/giphy.gif?cid=3640f6095bc3db544f63515363557661');
    image1.css('height', "500px");
    image1.css('height', "500px")
    resultsI.append(image1);
    text.html("You know Denzel but not to perfection");
    resultsI.append(text);
 
  }
 
  if (score <= 5 && score >= 2) {
 
    $("#splash").hide();
    $("#content").hide();
    var image1 = $("<img>");
    var text = $("<h1>");
 
    image1.attr('src', 'https://media3.giphy.com/media/encwOG7ZErSus/giphy.gif?cid=3640f6095bc3ba626d59735832495b06');
    image1.css('height', "500px");
    image1.css('height', "500px")
    resultsI.append(image1);
    text.html("You know Denzel exist");
    resultsI.append(text);
 
  }


  if (score < 2){

    $("#splash").hide();
    $("#content").hide();
    var image1 = $("<img>");
    var text = $("<h1>");
 
    image1.attr('src', 'https://media0.giphy.com/media/l0HlMSVVw9zqmClLq/200w.webp?cid=3640f6095bc3d5ca2e324c6c2efecf1c');
    image1.css('height', "500px");
    image1.css('height', "500px")
    resultsI.append(image1);
    text.html("Guess you just wasted your life not knowing a great man.......Sad");
    resultsI.append(text);


  }
 }


