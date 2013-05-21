$("#index").on("pageinit", function(){
                
    /*function idGrabber(y) {
        var idTag = document.getElementById(y);
        return idTag;
    };*/

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
                
                
    //Default Date
    function todaysDate(){
        var todaysDate = new Date();
        var currentYear = todaysDate.getFullYear();
        var currentMonth = todaysDate.getMonth() +1;
        var currentDay = todaysDate.getDate();
    
        if (currentMonth < 10) {
            currentMonth = "0" + currentMonth;
        };
    
        if (currentDay <10) {
            currentDay = "0" + currentDay;
        };

        var today = (currentYear) + "/" + (currentMonth) + "/" + (currentDay);
    
        return today;
    };
    
    //Adding Default Date to Application
    $('#dateAdded').val(todaysDate);
    $('input#dateAdded').datepicker();
    
		var addGameForm = $("#addGameForm");
                var errorLink = $("#formErrorPopUp");
                
		addGameForm.validate({
		    invalidHandler: function(form, validator) {
                        errorLink.click();
                        var html = "";
                        for (var errorKey in validator.submitted){
                            var errorLabel = $('label[for^="'+ errorKey +'"]').not('.error');
                            html += "<li>" + errorLabel.text() +"</li>"
                        };
                        $("#gameError ul").html(html);
		},
		
                submitHandler: function() {
		    var data = addGameForm.serializeArray();
		    storeData(data);
                    window.location.reload();
                }
		
	});

	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.


/*Edit Function not yet working correctly!
var editMyGame = function (){
	 
	    var gameInformation = localStorage.getItem(this.key);
	    var gameLibrary = JSON.parse(gameInformation);
	    
	    
	    $("#gameTitle").val(gameLibrary.gameTitle[1]);
	    $("#consoles").val(gameLibrary.console[1]);
	    $("#genre").val(gameLibrary.genre[1]);
	    $("#dateAdded").val(gameLibrary.dateAdded[1]);
	    $("#rating").val(gameLibrary.rating[1]);
            $("input[name=multiplayer]:checked").val(gameLibrary.multiplayer[1]);
	    var multiplayer = document.getElementById("addGameForm").multiplayer;
        for (var c = 0, d = multiplayer.length; c < d; c++) {
	        if (multiplayer[c].value == "Yes" && gameLibrary.multiplayer[1] == "Yes") {
	        	multiplayer[c].setAttribute("checked", "checked");
	        } else if (multiplayer[c].value == "No" && gameLibrary.multiplayer[1] == "No") {
	        	multiplayer[c].setAttribute("checked", "checked");    
	        }
        }
	    $("#downloadSize").val(gameLibrary.download[1]);
	    $("#additionalInfo").val(gameLibrary.additional[1]);
	    
	    saveInfo.removeEventListener("click", dataStorage);
	    $("#submitButton").val("Edit Game");
	    var gameEditor = $("#submitButton");
	    gameEditor.addEventListener("click", fieldCheck);
	    gameEditor.key = this.key;
         
};*/


//This will display all of the data that is inside of local storage
var getData = function(){
                
    	if(localStorage.length === 0){
	    	alert("You currently have no data in local storage, game data will be automatically added");
	    	addGameData();
    	}
		var createInfo = document.getElementById("gameInfoDisplay");
		for (var e = 0, f = localStorage.length; e < f; e++) {
		    var gameKey = localStorage.key(e);
		    var gameValue = localStorage.getItem(gameKey);
		    var gameInfoObject = JSON.parse(gameValue);
            var gameList = document.createElement("p");
			gameList.setAttribute("id", "gameListInfo");
			createInfo.appendChild(gameList);
			var listButtons = document.createElement("span");
			listButtons.setAttribute("id", "listButtons");
			imageAddition(gameInfoObject.console[1], gameList);
            for (var g in gameInfoObject) {
				var createGameList = document.createElement("span");
                createGameList.setAttribute("id", "gameInfoList");
				gameList.appendChild(createGameList);
				var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
				createGameList.innerHTML = gameTextOutput;
				gameList.appendChild(listButtons)
            }
            createButtons(localStorage.key(e), listButtons);
		}
                
};


//This will store all data from the form into Local Storage
var storeData = function(data, gameKey){
    
    if (!gameKey) {
        	var idGenerator = Math.floor(Math.random()*1000000000);
        } else {
	    	idGenerator = gameKey;    
        }
                
       var idGenerator = Math.floor(Math.random()*1000000000);
        var multiplayerSelection = $("input[name=multiplayer]:checked").val();
        var gameLibrary = {
            gameTitle  :["", $("#gameTitle").val()],
            console    :["<strong>Console:</strong> ", $("#consoles").val()],
            genre      :["<strong>Genre:</strong> ", $("#genre").val()],
            dateAdded  :["<strong>Date Added:</strong> ", $("#dateAdded").val()],
            rating     :["<strong>Rating:</strong> ", $("#rating").val()],
            multiplayer:["<strong>Multiplayer Functionality:</strong> ", multiplayerSelection],
            download   :["<strong>Download Size:</strong> ", $("#downloadSize").val()],
            additional :["<strong>Additional Information:</strong> ", $("#additionalInfo").val()]
        };
        localStorage.setItem(idGenerator, JSON.stringify(gameLibrary));
        alert("Game Information Has Been Saved!");
};


//This will ask the user if they would like to delete a single game.
    var deleteMyGame = function (){
                
    var confirmDelete = confirm("Please confirm that you would like to delete this game.");
	    if (confirmDelete) {
		    localStorage.removeItem(this.key)
		    alert("This game was successfully deleted from storage.")
	    } else {
		    alert("Your game was not deleted.");
	    }
			
};
		
//This will delete all of the local storage that is currently saved			
    var clearLocal = function(){
                
	    if(localStorage.length === 0){
		alert("You have no saved data to delete.");    
	    } else {
		localStorage.clear();
		alert("You have successfully cleared your data");
		window.location.reload();
		return false;
	    }
};

    //Creates my buttons to delete and edit single games
    function createButtons(gameKey, listButtons){
	   /* Removed due to not working yet
            var createEditButton = document.createElement("a");
	    createEditButton.setAttribute("id", "createdButton");
	    createEditButton.href = "#addItem";
	    createEditButton.key = gameKey;
	    createEditButton.innerHTML = "Edit Game";
	    createEditButton.addEventListener("click", editMyGame)
	    listButtons.appendChild(createEditButton);*/
	    
	    var createDeleteButton = document.createElement("a");
	    createDeleteButton.setAttribute("id", "createdButton");
	    createDeleteButton.href = "#index";
	    createDeleteButton.key = gameKey;
	    createDeleteButton.innerHTML = "Delete Game";
	    createDeleteButton.addEventListener("click", deleteMyGame);
	    listButtons.appendChild(createDeleteButton);
    }

    //This function will add an image into my display
    //Displays it only for my "Display Item Page"
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
    
    //Add game data if none is in local storage!
    function addGameData(){
	    for (var r in gamingData){
		    var idGenerator = Math.floor(Math.random()*1000000000);
		    localStorage.setItem(idGenerator, JSON.stringify(gamingData[r]));
	    }
    }

var clearData 	= $("#clearData");
    clearData.click(clearLocal);
var displayData = $("#displayData");
    displayData.click(getData);