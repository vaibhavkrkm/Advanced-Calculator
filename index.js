// getting the main HTML body tag
body = document.getElementsByTagName("body")[0];

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
var buttonLeftBracket = document.getElementById("button_leftBracket");
var buttonRightBracket = document.getElementById("button_rightBracket");
var buttonCalc = document.getElementById("button_calc");

// getting the user input text-box
var textbox = document.getElementById("userInput");

// add button event
buttonAdd.addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += "+";
	}
	else
	{
		alert("Input out of range!");
	}
});

// subtract button event
buttonSub.addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += "-";
	}
	else
	{
		alert("Input out of range!");
	}
});

// multiply button event
buttonMul.addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += "*";
	}
	else
	{
		alert("Input out of range!");
	}
});

// divide button event
buttonDiv.addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += "/";
	}
	else
		alert("Input out of range!");
});

// left bracket button event
buttonLeftBracket.addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += "(";
	}
	else
		alert("Input out of range!");
});

// right bracket button event
buttonRightBracket.addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += ")";
	}
	else
		alert("Input out of range!");
});

numericButtons[0].addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += 1;
	}
	else
	{
		alert("Input out of range!");
	}
});

numericButtons[1].addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += 2;
	}
	else
	{
		alert("Input out of range!");
	}
});

numericButtons[2].addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += 3;
	}
	else
	{
		alert("Input out of range!");
	}
});

numericButtons[3].addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += 4;
	}
	else
	{
		alert("Input out of range!");
	}
});

numericButtons[4].addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += 5;
	}
	else
	{
		alert("Input out of range!");
	}
});

numericButtons[5].addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += 6;
	}
	else
	{
		alert("Input out of range!");
	}
});

numericButtons[6].addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += 7;
	}
	else
	{
		alert("Input out of range!");
	}
});

numericButtons[7].addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += 8;
	}
	else
	{
		alert("Input out of range!");
	}
});

numericButtons[8].addEventListener("click", function(){
	if(textbox.value.length < 30)
	{
		textbox.value += 9;
	}
	else
	{
		alert("Input out of range!");
	}
});

body.addEventListener("keydown", function(){
	// console.log("Key : " + event.key + ", ASCII Code : " + event.key.charCodeAt());
	if(event.key.charCodeAt() == "Q".charCodeAt() || event.key.charCodeAt() == "q".charCodeAt())
	{
		textbox.value = "";
	}
	else if((event.key.charCodeAt() >= "1".charCodeAt() && event.key.charCodeAt() <= "9".charCodeAt()) || event.key.charCodeAt() == "+".charCodeAt() || event.key.charCodeAt() == "-".charCodeAt() || event.key.charCodeAt() == "*".charCodeAt() || event.key.charCodeAt() == "/".charCodeAt() || event.key.charCodeAt() == "(".charCodeAt() || event.key.charCodeAt() == ")".charCodeAt() || event.key.charCodeAt() == "0".charCodeAt())
	{
		if(textbox.value.length < 30)
		{
			textbox.value += event.key;
		}
		else
		{
			alert("Input out of range!");
		}
	}
	else if(event.key.charCodeAt() == 66)
	{
		newValue = textbox.value.slice(0, textbox.value.length - 1);
		textbox.value = newValue;
	}
});
