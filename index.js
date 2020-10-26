// getting the numeric buttons
var numericButtons = [];
for(var i = 1; i <= 9; i++)
{
	var currentButton = document.getElementById("button_" + i);
	numericButtons.push(currentButton);
}

// getting the operator buttons
var buttonAdd = document.getElementById("button_add");
var buttonSub = document.getElementById("button_sub");
var buttonMul = document.getElementById("button_mul");
var buttonDiv = document.getElementById("button_div");
var buttonCalc = document.getElementById("button_calc");

// getting the user input text-box
var textbox = document.getElementById("userInput");

// add button event
buttonAdd.addEventListener("click", function(){
	textbox.value += "+";
});

// subtract button event
buttonSub.addEventListener("click", function(){
	textbox.value += "-";
});

// multiply button event
buttonMul.addEventListener("click", function(){
	textbox.value += "*";
});

// divide button event
buttonDiv.addEventListener("click", function(){
	textbox.value += "/";
});

numericButtons[0].addEventListener("click", function(){
	textbox.value += 1;
});

numericButtons[1].addEventListener("click", function(){
	textbox.value += 2;
});

numericButtons[2].addEventListener("click", function(){
	textbox.value += 3;
});

numericButtons[3].addEventListener("click", function(){
	textbox.value += 4;
});

numericButtons[4].addEventListener("click", function(){
	textbox.value += 5;
});

numericButtons[5].addEventListener("click", function(){
	textbox.value += 6;
});

numericButtons[6].addEventListener("click", function(){
	textbox.value += 7;
});

numericButtons[7].addEventListener("click", function(){
	textbox.value += 8;
});

numericButtons[8].addEventListener("click", function(){
	textbox.value += 9;
});
