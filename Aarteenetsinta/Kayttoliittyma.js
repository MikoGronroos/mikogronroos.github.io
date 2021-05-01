'use strict';

let gameBoard = 
[
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0]
];

let amountOfGold = 0;
let tries = 40;
let foundTreasureCount = 0;

document.body.onload = CreateBoard();

function RandomizeTreasure()
{
	for(let i = 0; i < gameBoard.length; i++)
	{
		for(let j = 0; j < gameBoard[i].length; j++)
		{
			let randomNumber = Math.round(Math.random() * 30);
			if(randomNumber >= 29)
			{
				gameBoard[i][j] = 1;
				amountOfGold++;
			}
		}
	}
}

function CreateBoard()
{
  RandomizeTreasure();
  UpdateUI();
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "grid-container");
  
  for(let i = 0; i < gameBoard.length; i++)
  {
	for(let j = 0; j < gameBoard[i].length; j++)
	{
		const newContent = document.createElement("div");
		newContent.setAttribute("class", "slot");
		if(gameBoard[i][j] == 1)
		{
			newContent.setAttribute("id", "hiddenTreasure");
		}
		newContent.addEventListener("click", function(){
			CanClick(newContent);
		}, false);
		newDiv.appendChild(newContent);
	}  
  }
  const currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv);
}

function CanClick(content)
{
	let _content = content;
	if(tries > 0){
		console.log("Kaivoit taman ylos");
		tries--;
		if(hasTreasure(_content))
		{
			foundTreasureCount++;
			tries += 5;
			_content.setAttribute("id", "treasure");
			_content.removeAttribute("class");
			if(amountOfGold == foundTreasureCount)
			{
				document.getElementById("GameOver").innerHTML = "Loysit kaikki kullat!";
			}
		}else
		{
			_content.setAttribute("id", "opened");
			_content.removeAttribute("class");
		}
		var new_element = _content.cloneNode(true);
		_content.parentNode.replaceChild(new_element, _content);
		UpdateUI();
	}
}

function UpdateUI()
{
	document.getElementById("info").innerHTML = "Loytamasi kullat = " + foundTreasureCount.toString() + ". Yrityksia jaljella = " + tries.toString() + ".";
}

function hasTreasure(content){
    return content.id == 'hiddenTreasure';
}