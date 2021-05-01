'use strict';

let gameBoard = 
[
	[1,5,2,6],
	[3,7,4,3],
	[4,2,7,0],
	[6,5,1,0]
];

let clickedObject;

document.body.onload = CreateBoard();

function CreateBoard()
{
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "grid-container");
  
  for(let i = 0; i < gameBoard.length; i++)
  {
	for(let j = 0; j < gameBoard[i].length; j++)
	{
		const newContent = document.createElement("div");
		newContent.setAttribute("class", "slot");
		newContent.addEventListener("click", function(){
			CanClick(newContent, gameBoard[i][j].toString());
		}, false);
		newContent.setAttribute("id", gameBoard[i][j].toString());
		newDiv.appendChild(newContent);
	}  
  }
  const currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv);
}

function CanClick(_content, number)
{
	if(clickedObject == null){
		clickedObject = _content;
	}
	_content.removeAttribute("class");
	_content.setAttribute("class", "opened");
	_content.innerHTML = "";
	let content = document.createTextNode(number)
	_content.appendChild(content)
	if(_content == clickedObject)
	{
		return;
	}
	if(_content.innerHTML == clickedObject.innerHTML)
	{
		clickedObject.removeAttribute("class");
		clickedObject.setAttribute("class", "cleared");
		_content.removeAttribute("class");
		_content.setAttribute("class", "cleared");
		var new_element1 = _content.cloneNode(true);
		var new_element2 = clickedObject.cloneNode(true);
		_content.parentNode.replaceChild(new_element1, _content);
		clickedObject.parentNode.replaceChild(new_element2, clickedObject);
		clickedObject = null;
	}else
	{
		clickedObject.removeAttribute("class");
		clickedObject.setAttribute("class", "slot");
		_content.removeAttribute("class");
		_content.setAttribute("class", "slot");
		_content.innerHTML = "";
		clickedObject.innerHTML = "";
		clickedObject = null;
	}
}
