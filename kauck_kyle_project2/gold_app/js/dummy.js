window.addEventListener("DOMContentLoaded", function (){
    
    //Function to get my ID Tags from the HTML
    function idGrabber(y) {
        var idTag = document.getElementById(y);
        return idTag;
    };

    //Creates all my Xbox Data
    function xboxFetch(){
	var createInfo = document.getElementById("xboxData");
	createInfo.innerHTML = ("");
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createInfo.appendChild(createUL);
		for (var e = 0, f = localStorage.length; e < f; e++) {
		    var gameKey = localStorage.key(e);
		    var gameValue = localStorage.getItem(gameKey);
		    var gameInfoObject = JSON.parse(gameValue);
		    if (gameInfoObject.console[1] === "Xbox 360") {
			var newLi = document.createElement("li");
			createUL.appendChild(newLi);
			var newHeader = document.createElement("h3");
			newHeader.innerHTML = gameInfoObject.gameTitle[1];
			newLi.appendChild(newHeader);
			var consoleName = document.createElement("p");
			consoleName.innerHTML = gameInfoObject.console[1];
			newLi.appendChild(consoleName);
			imageAddition(gameInfoObject.console[1], newLi);
			var gameList = document.createElement("ul");
			newLi.appendChild(gameList);
			    for (var g in gameInfoObject) {
			        var createGameList = document.createElement("li");
			        createGameList.setAttribute("id", "gameInfoList");
			        gameList.appendChild(createGameList);
			        var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
			        createGameList.innerHTML = gameTextOutput;
			    }
		    }
		}
    }
    
        //Creates all my PS3 Data
    function ps3Fetch(){
	var createInfo = document.getElementById("ps3Data");
	createInfo.innerHTML = ("");
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createInfo.appendChild(createUL);
		for (var e = 0, f = localStorage.length; e < f; e++) {
		    var gameKey = localStorage.key(e);
		    var gameValue = localStorage.getItem(gameKey);
		    var gameInfoObject = JSON.parse(gameValue);
		    if (gameInfoObject.console[1] === "Playstation 3") {
			var newLi = document.createElement("li");
			createUL.appendChild(newLi);
			var newHeader = document.createElement("h3");
			newHeader.innerHTML = gameInfoObject.gameTitle[1];
			newLi.appendChild(newHeader);
			var consoleName = document.createElement("p");
			consoleName.innerHTML = gameInfoObject.console[1];
			newLi.appendChild(consoleName);
			imageAddition(gameInfoObject.console[1], newLi);
			var gameList = document.createElement("ul");
			newLi.appendChild(gameList);
			    for (var g in gameInfoObject) {
			        var createGameList = document.createElement("li");
			        createGameList.setAttribute("id", "gameInfoList");
			        gameList.appendChild(createGameList);
			        var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
			        createGameList.innerHTML = gameTextOutput;
			    }
		    }
		}
    }
    
        //Creates all my Xbox Data
    function wiiFetch(){
	var createInfo = document.getElementById("wiiData");
	createInfo.innerHTML = ("");
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createInfo.appendChild(createUL);
		for (var e = 0, f = localStorage.length; e < f; e++) {
		    var gameKey = localStorage.key(e);
		    var gameValue = localStorage.getItem(gameKey);
		    var gameInfoObject = JSON.parse(gameValue);
		    if (gameInfoObject.console[1] === "Wii U") {
			var newLi = document.createElement("li");
			createUL.appendChild(newLi);
			var newHeader = document.createElement("h3");
			newHeader.innerHTML = gameInfoObject.gameTitle[1];
			newLi.appendChild(newHeader);
			var consoleName = document.createElement("p");
			consoleName.innerHTML = gameInfoObject.console[1];
			newLi.appendChild(consoleName);
			imageAddition(gameInfoObject.console[1], newLi);
			var gameList = document.createElement("ul");
			newLi.appendChild(gameList);
			    for (var g in gameInfoObject) {
			        var createGameList = document.createElement("li");
			        createGameList.setAttribute("id", "gameInfoList");
			        gameList.appendChild(createGameList);
			        var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
			        createGameList.innerHTML = gameTextOutput;
			    }
		    }
		}
    }
    
        //Creates all my PC Data
    function pcFetch(){
	var createInfo = document.getElementById("pcData");
	createInfo.innerHTML = ("");
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createInfo.appendChild(createUL);
		for (var e = 0, f = localStorage.length; e < f; e++) {
		    var gameKey = localStorage.key(e);
		    var gameValue = localStorage.getItem(gameKey);
		    var gameInfoObject = JSON.parse(gameValue);
		    if (gameInfoObject.console[1] === "PC") {
			var newLi = document.createElement("li");
			createUL.appendChild(newLi);
			var newHeader = document.createElement("h3");
			newHeader.innerHTML = gameInfoObject.gameTitle[1];
			newLi.appendChild(newHeader);
			var consoleName = document.createElement("p");
			consoleName.innerHTML = gameInfoObject.console[1];
			newLi.appendChild(consoleName);
			imageAddition(gameInfoObject.console[1], newLi);
			var gameList = document.createElement("ul");
			newLi.appendChild(gameList);
			    for (var g in gameInfoObject) {
			        var createGameList = document.createElement("li");
			        createGameList.setAttribute("id", "gameInfoList");
			        gameList.appendChild(createGameList);
			        var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
			        createGameList.innerHTML = gameTextOutput;
			    }
		    }
		}
    }
    
        //Creates all my 3DS Data
    function dsFetch(){
	var createInfo = document.getElementById("3dsData");
	createInfo.innerHTML = ("");
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createInfo.appendChild(createUL);
		for (var e = 0, f = localStorage.length; e < f; e++) {
		    var gameKey = localStorage.key(e);
		    var gameValue = localStorage.getItem(gameKey);
		    var gameInfoObject = JSON.parse(gameValue);
		    if (gameInfoObject.console[1] === "Nintendo 3DS") {
			var newLi = document.createElement("li");
			createUL.appendChild(newLi);
			var newHeader = document.createElement("h3");
			newHeader.innerHTML = gameInfoObject.gameTitle[1];
			newLi.appendChild(newHeader);
			var consoleName = document.createElement("p");
			consoleName.innerHTML = gameInfoObject.console[1];
			newLi.appendChild(consoleName);
			imageAddition(gameInfoObject.console[1], newLi);
			var gameList = document.createElement("ul");
			newLi.appendChild(gameList);
			    for (var g in gameInfoObject) {
			        var createGameList = document.createElement("li");
			        createGameList.setAttribute("id", "gameInfoList");
			        gameList.appendChild(createGameList);
			        var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
			        createGameList.innerHTML = gameTextOutput;
			    }
		    }
		}
    }
    
        //Creates all my Vita Data
    function vitaFetch(){
	var createInfo = document.getElementById("vitaData");
	createInfo.innerHTML = ("");
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createInfo.appendChild(createUL);
		for (var e = 0, f = localStorage.length; e < f; e++) {
		    var gameKey = localStorage.key(e);
		    var gameValue = localStorage.getItem(gameKey);
		    var gameInfoObject = JSON.parse(gameValue);
		    if (gameInfoObject.console[1] === "Playstation Vita") {
			var newLi = document.createElement("li");
			createUL.appendChild(newLi);
			var newHeader = document.createElement("h3");
			newHeader.innerHTML = gameInfoObject.gameTitle[1];
			newLi.appendChild(newHeader);
			var consoleName = document.createElement("p");
			consoleName.innerHTML = gameInfoObject.console[1];
			newLi.appendChild(consoleName);
			imageAddition(gameInfoObject.console[1], newLi);
			var gameList = document.createElement("ul");
			newLi.appendChild(gameList);
			    for (var g in gameInfoObject) {
			        var createGameList = document.createElement("li");
			        createGameList.setAttribute("id", "gameInfoList");
			        gameList.appendChild(createGameList);
			        var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
			        createGameList.innerHTML = gameTextOutput;
			    }
		    }
		}
    }
    
        //Creates all my Iphone Data
    function iphoneFetch(){
	var createInfo = document.getElementById("iphoneData");
	createInfo.innerHTML = ("");
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createInfo.appendChild(createUL);
		for (var e = 0, f = localStorage.length; e < f; e++) {
		    var gameKey = localStorage.key(e);
		    var gameValue = localStorage.getItem(gameKey);
		    var gameInfoObject = JSON.parse(gameValue);
		    if (gameInfoObject.console[1] === "iPhone/iPad") {
			var newLi = document.createElement("li");
			createUL.appendChild(newLi);
			var newHeader = document.createElement("h3");
			newHeader.innerHTML = gameInfoObject.gameTitle[1];
			newLi.appendChild(newHeader);
			var consoleName = document.createElement("p");
			consoleName.innerHTML = gameInfoObject.console[1];
			newLi.appendChild(consoleName);
			imageAddition(gameInfoObject.console[1], newLi);
			var gameList = document.createElement("ul");
			newLi.appendChild(gameList);
			    for (var g in gameInfoObject) {
			        var createGameList = document.createElement("li");
			        createGameList.setAttribute("id", "gameInfoList");
			        gameList.appendChild(createGameList);
			        var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
			        createGameList.innerHTML = gameTextOutput;
			    }
		    }
		}
    }
    
        //Creates all my Xbox Data
    function androidFetch(){
	var createInfo = document.getElementById("androidData");
	createInfo.innerHTML = ("");
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createInfo.appendChild(createUL);
		for (var e = 0, f = localStorage.length; e < f; e++) {
		    var gameKey = localStorage.key(e);
		    var gameValue = localStorage.getItem(gameKey);
		    var gameInfoObject = JSON.parse(gameValue);
		    if (gameInfoObject.console[1] === "Android") {
			var newLi = document.createElement("li");
			createUL.appendChild(newLi);
			var newHeader = document.createElement("h3");
			newHeader.innerHTML = gameInfoObject.gameTitle[1];
			newLi.appendChild(newHeader);
			var consoleName = document.createElement("p");
			consoleName.innerHTML = gameInfoObject.console[1];
			newLi.appendChild(consoleName);
			imageAddition(gameInfoObject.console[1], newLi);
			var gameList = document.createElement("ul");
			newLi.appendChild(gameList);
			    for (var g in gameInfoObject) {
			        var createGameList = document.createElement("li");
			        createGameList.setAttribute("id", "gameInfoList");
			        gameList.appendChild(createGameList);
			        var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
			        createGameList.innerHTML = gameTextOutput;
			    }
		    }
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
	    	imageTag.setAttribute("src", "img/xbox360.gif");
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
var ps3Display = idGrabber("ps3JSON");
    ps3Display.addEventListener("click", ps3Fetch)
var wiiDisplay = idGrabber("wiiJSON");
    wiiDisplay.addEventListener("click", wiiFetch)
var pcDisplay = idGrabber("pcJSON");
    pcDisplay.addEventListener("click", pcFetch)
var dsDisplay = idGrabber("3dsJSON");
    dsDisplay.addEventListener("click", dsFetch)
var vitaDisplay = idGrabber("vitaJSON");
    vitaDisplay.addEventListener("click", vitaFetch)
var iphoneDisplay = idGrabber("iphoneJSON");
    iphoneDisplay.addEventListener("click", iphoneFetch)
var androidDisplay = idGrabber("androidJSON");
    androidDisplay.addEventListener("click", androidFetch)
    
});