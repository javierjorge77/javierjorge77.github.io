var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton= document.querySelector("#reset ")
var easyBtn= document.querySelector("#easyBtn")
var hardBtn= document.querySelector("#hardBtn")
var numSquares= 6;
colorDisplay.textContent = pickedColor;

//****** Easy Button Start of function******
easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected")
	hardBtn.classList.remove("selected")
	numSquares= 3;
	colors= generateRandomColors(numSquares)
	pickedColor= pickColor();

	for ( var i = 0; i< squares.length; i++){
		
		if(colors[i]){
			squares[i].style.backgroundColor= colors[i];
				}
		else {
			squares[i].style.display= "none";
		}
				
	}
colorDisplay.textContent= pickedColor;
})
 //Easy button ends here  


 //******** Hard Button Function: ********  
hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected")
	easyBtn.classList.remove("selected")
	numSquares= 6;
	colors= generateRandomColors(numSquares);
	pickedColor= pickColor();
	
	for ( var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor= colors[i];
		squares[i].style.display= "block";
		}	  
	colorDisplay.textContent= pickedColor;

})
// End of Hard Button

// ********  Reset Button:  ******** 

resetButton.addEventListener("click", function(){
	colors= generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent= "";
	this.textContent= "New Colors"

	for(var i = 0; i < squares.length; i++){
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor= "steelblue";
	
})


for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
	var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
	console.log(clickedColor, pickedColor);
	if(clickedColor === pickedColor) {
		messageDisplay.textContent= ("Correct!");
		changeColors(clickedColor);
		h1.style.backgroundColor=clickedColor;
		resetButton.textContent="Play Again?";
	} else {
		this.style.backgroundColor= "#232323";
		messageDisplay.textContent= ("try again");
	}
	});
}


function changeColors(color) {
	//loop through all squares
	//Change color to match the given color
	for (i=0; i<squares.length; i++ ){
		squares[i].style.backgroundColor= color;
	}

}

function pickColor(){
return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColors(num){
var arr= [];
for (var i=0; i< num; i++){
	arr.push(randomColor())
	console.log (arr);
}
return arr;
}


function randomColor(){
 var r= Math.floor(Math.random()*256).toString();
 var g= Math.floor(Math.random()*256).toString();
 var b= Math.floor(Math.random()*256).toString();

 return "rgb("+r+", "+g+", " +b+")";
}
