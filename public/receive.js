circleColor = 0;

var socket;

function setup() {
  background(200,80,30);
  createCanvas(windowWidth, windowHeight);
  textFont('Roboto Mono'); 

  //work on the web!!!!!!!!!!!!
 // socket = io.connect('https://guarded-springs-64270.herokuapp.com/');
  
 //work on your localhost!!!!!!!!!!!  
 socket = io.connect('localhost:3000')


  socket.on('navigate', navigate); 
  socket.on('fragment', fragment);
  socket.on('blueforms', blueforms);
  socket.on('particle', particle);
  socket.on('modify', modify);
  socket.on('trace', trace);
  socket.on('submit', submit);
  socket.on('windows', windows);
  socket.on('collect', collect);

  var seconds; 
  var change;

}

function draw() {

  seconds = millis() / 1000;
  change = map(sin(seconds), -1, 1, 0, 10)
	
  
}

function navigate(){
	console.log("click came through");
	background(142, 18, 18);
	textSize(220);
	textAlign(CENTER);
	fill(255);
	text("NAVIGATE", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function fragment(){
	console.log("click 2 came through");
	background(142, 18, 18);
	textSize(220);
	fill(255);
	textAlign(CENTER)
	text("FRAGMENT", windowWidth/2 + change, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function blueforms(){
	console.log("click 3 came through");
	background(142, 18, 18);
	textSize(220);
	fill(255);
	textAlign(CENTER)
	text("BLUEFORMS", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function particle(){
	console.log("click 3 came through");
	background(142, 18, 18);
	textSize(220);
	fill(255);
	textAlign(CENTER)
	text("PARTICLE", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function modify(){
	console.log("click 2 came through");
	background(142, 18, 18);
	textSize(220);
	fill(255);
	textAlign(CENTER)
	text("MODIFY", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function trace(){
	console.log("click 2 came through");
	background(142, 18, 18);
	textSize(220);
	fill(255);
	textAlign(CENTER)
	text("TRACE", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function submit(){
	console.log("click 2 came through");
	background(142, 18, 18);
	textSize(220);
	fill(255);
	textAlign(CENTER)
	text("SUBMIT", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function windows(){
	console.log("click 2 came through");
	background(142, 18, 18);
	textSize(220);
	fill(255);
	textAlign(CENTER)
	text("WINDOWS", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function collect(){
	console.log("click 2 came through");
	background(142, 18, 18);
	textSize(220);
	fill(255);
	textAlign(CENTER)
	text("COLLECT", windowWidth/2, windowHeight/2);
	setTimeout(eraseWord, 90000);
}

function eraseWord(){
	fill(106, 21, 24);
	rect(0, 0, windowWidth, windowHeight);
	console.log("word erased");
}