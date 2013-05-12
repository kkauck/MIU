window.addEventListener("DOMContentLoaded", function (){
    
    //Function to get my ID Tags from the HTML
    function idGrabber(y) {
        var idTag = document.getElementById(y);
        return idTag;
    };

    //Creates all my Xbox Data
    function xboxFetch(){
    	if(localStorage.length === 0){
	    addGameData();
    	}
		var createInfo = document.getElementById("xboxData");
		var createUL = document.createElement("ul");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createInfo.appendChild(createUL);
		for (var e = 0, f = localStorage.length; e < f; e++) {
		    var newLi = document.createElement("li");
		    createUL.appendChild(newLi);
		    var gameKey = localStorage.key(e);
		    var gameValue = localStorage.getItem(gameKey);
		    var gameInfoObject = JSON.parse(gameValue);
		    var newHeader = document.createElement("h3");
		    newHeader.innerHTML = gameInfoObject.gameTitle[1];
		    newLi.appendChild(newHeader);
		    var consoleName = document.createElement("p");
		    consoleName.innerHTML = gameInfoObject.console[1];
		    newLi.appendChild(consoleName);
		    imageAddition(gameInfoObject.console[1], newLi);
		    var gameList = document.createElement("ul");
			newLi.appendChild(gameList);
			//var listButtons = document.createElement("span");
			//listButtons.setAttribute("id", "listButtons");
			for (var g in gameInfoObject) {
			    var createGameList = document.createElement("li");
			    createGameList.setAttribute("id", "gameInfoList");
			    gameList.appendChild(createGameList);
			    var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
			    createGameList.innerHTML = gameTextOutput;
			    //gameList.appendChild(listButtons)
            }
            //createButtons(localStorage.key(e), listButtons);
		}
    }
    
    //This function will automatically display data if there is none in local storage
    function addGameData(){
	    for (var r in gamingData){
		    var idGenerator = Math.floor(Math.random()*1000000000);
		    localStorage.setItem(idGenerator, JSON.stringify(gamingData[r]));
	    }
    }
    
    //This function will add an image into my display
    function imageAddition(consoleValue, newLi){
	    if(consoleValue === "Xbox 360"){
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/xbox360.gif");
	    	newLi.appendChild(imageTag);
	    } else if (consoleValue === "Playstation 3") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/playstationThree.gif");
	    	newLi.appendChild(imageTag);
	    } else if (consoleValue === "Wii U") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/wiiU.gif");
	    	newLi.appendChild(imageTag);  
	    } else if (consoleValue === "PC") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/pc.gif");
	    	newLi.appendChild(imageTag);
	    } else if (consoleValue === "Playstation Vita") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/playstationVita.gif");
	    	newLi.appendChild(imageTag);
	    } else if (consoleValue === "Nintendo 3DS") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/nintendo3ds.gif");
	    	newLi.appendChild(imageTag);
	    } else if (consoleValue === "iPhone/iPad") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/iPhone.gif");
	    	newLi.appendChild(imageTag);
	    } else if (consoleValue === "Android") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/android.gif");
	    	newLi.appendChild(imageTag);
	    }
    }

//My Even Listeners
var xboxDisplay = idGrabber("xboxJSON");
    xboxDisplay.addEventListener("click", xboxFetch)
    
});