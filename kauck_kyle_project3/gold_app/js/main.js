$("#index").on("pageinit", function(){
                
    function idGrabber(y) {
        var idTag = document.getElementById(y);
        return idTag;
    };

    //Creates all my Xbox Data
    function xboxFetch(){
	var createInfo = $("#xboxData");
	createInfo.empty();
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-add-back-btn", "true");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createUL.setAttribute("data-filter-placeholder", "Search for a game...");
		createInfo.append(createUL);
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
	var createInfo = $("#ps3Data");
	createInfo.empty();
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createUL.setAttribute("data-filter-placeholder", "Search for a game...");
		createInfo.append(createUL);
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
    
    //Creates all my Wii Data
    function wiiFetch(){
	var createInfo = $("#wiiData");
	createInfo.empty();
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createUL.setAttribute("data-filter-placeholder", "Search for a game...");
		createInfo.append(createUL);
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
	var createInfo = $("#pcData");
	createInfo.empty();
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createUL.setAttribute("data-filter-placeholder", "Search for a game...");
		createInfo.append(createUL);
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
	var createInfo = $("#3dsData");
	createInfo.empty();
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createUL.setAttribute("data-filter-placeholder", "Search for a game...");
		createInfo.append(createUL);
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
	var createInfo = $("#vitaData");
	createInfo.empty();
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createUL.setAttribute("data-filter-placeholder", "Search for a game...");
		createInfo.append(createUL);
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
	var createInfo = $("#iphoneData");
	createInfo.empty();
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createUL.setAttribute("data-filter-placeholder", "Search for a game...");
		createInfo.append(createUL);
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
    
    //Creates all my Andoird Data
    function androidFetch(){
	var createInfo = $("#androidData");
	createInfo.empty();
	if(localStorage.length === 0){
	    addGameData();
    	}
		var createUL = document.createElement("ul");
		createUL.setAttribute("id", "listCreation");
		createUL.setAttribute("data-role", "listview");
		createUL.setAttribute("data-filter", "true");
		createUL.setAttribute("data-filter-placeholder", "Search for a game...");
		createInfo.append(createUL);
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
    var xboxDisplay = $("#xboxJSON");
        xboxDisplay.click(xboxFetch);
    var ps3Display = $("#ps3JSON");
        ps3Display.click(ps3Fetch);
    var wiiDisplay = $("#wiiJSON");
        wiiDisplay.click(wiiFetch);
    var pcDisplay = $("#pcJSON");
        pcDisplay.click(pcFetch);
    var dsDisplay = $("#3dsJSON");
        dsDisplay.click(dsFetch);
    var vitaDisplay = $("#vitaJSON");
        vitaDisplay.click(vitaFetch);
    var iphoneDisplay = $("#iphoneJSON");
        iphoneDisplay.click(iphoneFetch);
    var androidDisplay = $("#androidJSON");
        androidDisplay.click(androidFetch);
    
});	
		
$("#addItem").on("pageinit", function(){

		var addGameForm = $("#addGameForm");
		    addGameForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var deleteItem = function (){
			
};
					
var clearLocal = function(){

};