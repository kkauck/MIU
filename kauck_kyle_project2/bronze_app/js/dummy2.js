window.addEventListener("DOMContentLoaded", function (){

    function idGrabber(y) {
        console.log("We have lift off still!")
        var idTag = document.getElementById(y);
        return idTag;
    }
    
    function xboxFetch(){
	var createInfo = document.getElementById("container");
	if(localStorage.length === 0){
	    addGameData();
    	}
		for (var e = 0, f = localStorage.length; e < f; e++) {
		    var gameKey = localStorage.key(e);
		    var gameValue = localStorage.getItem(gameKey);
		    var gameInfoObject = JSON.parse(gameValue);
		    if (gameInfoObject.console[1] === "Xbox 360") {
			//imageAddition(gameInfoObject.console[1], newLi);
			    for (var g in gameInfoObject) {
			        var createGameList = document.createElement("p");
			        createInfo.appendChild(createGameList);
			        var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
			        createGameList.innerHTML = gameTextOutput;
			    }
		    }
		}
    }
    
    /*function xboxFetch(){
	var createInfo = document.getElementById("container");
	if(localStorage.length === 0){
	    addGameData();
    	}
                
		for (var e = 0, f = localStorage.length; e < f; e++) {
		    var gameKey = localStorage.key(e);
		    var gameValue = localStorage.getItem(gameKey);
		    var gameInfoObject = JSON.parse(gameValue);
		    if (gameInfoObject.console[1] === "Xbox 360") {
                            //imageAddition(gameInfoObject.console[1], createInfo);
			    for (var g in gameInfoObject) {
			        var createGameList = document.createElement("p");
			        createInfo.appendChild(createGameList);
			        var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
			        createGameList.innerHTML = gameTextOutput;
			    }
		    }
		}
    }*/
    
    /*function xboxFetch (){
        console.log("We have lift off still!3763!!!")
    	if(localStorage.length === 0){
	    	addGameData();
    	}
	var createInfo = document.getElementById("xboxJSON");
	    for (var e = 0, f = localStorage.length; e < f; e++) {
		var gameKey = localStorage.key(e);
		var gameValue = localStorage.getItem(gameKey);
		var gameInfoObject = JSON.parse(gameValue);
		    //imageAddition(gameInfoObject.console[1], createInfo);
                    for (var g in gameInfoObject) {
			var gameList = document.createElement("p");
                        gameList.setAttribute("id", "gameListInfo");
                        createInfo.appendChild(gameList);
			var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
			gameList.innerHTML = gameTextOutput;
                    }
            }
    }*/
                                
    //Function to Create all images!
    /*function imageAddition(consoleValue, createInfo){
        console.log("We have lift off still!!!!!!!!")
	    if(consoleValue === "Xbox 360"){
	    	var imageTag = document.createElement("img");
	    	imageTag.setAttribute("src", "img/xbox360.gif");
	    	createInfo.appendChild(imageTag);
	    } else if (consoleValue === "Playstation 3") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/playstationThree.gif");
	    	createInfo.appendChild(imageTag);
	    } else if (consoleValue === "Wii U") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/wiiU.gif");
	    	createInfo.appendChild(imageTag);  
	    } else if (consoleValue === "PC") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/pc.gif");
	    	createInfo.appendChild(imageTag);
	    } else if (consoleValue === "Playstation Vita") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/playstationVita.gif");
	    	createInfo.appendChild(imageTag);
	    } else if (consoleValue === "Nintendo 3DS") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/nintendo3ds.gif");
	    	createInfo.appendChild(imageTag);
	    } else if (consoleValue === "iPhone/iPad") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/iPhone.gif");
	    	createInfo.appendChild(imageTag);
	    } else if (consoleValue === "Android") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/android.gif");
	    	createInfo.appendChild(imageTag);
	    }
    }*/
    
    var xboxData = idGrabber("container");
        xboxFetch();

});

/*window.addEventListener("DOMContentLoaded", function (){
    function idGrabber(y) {
        console.log("We have lift off still!")
        var idTag = document.getElementById(y);
        return idTag;
    };
    
    function xboxFetch(){
        console.log("We have lift off still!3763!!!")
    	if(localStorage.length === 0){
	    	addGameData();
    	}
	var createInfo = document.getElementById("xboxJSON");
	    for (var e = 0, f = localStorage.length; e < f; e++) {
		var gameKey = localStorage.key(e);
		var gameValue = localStorage.getItem(gameKey);
		var gameInfoObject = JSON.parse(gameValue);
		    imageAddition(gameInfoObject.console[1], createInfo);
                    for (var g in gameInfoObject) {
			var gameList = document.createElement("p");
                        gameList.setAttribute("id", "gameListInfo");
                        createInfo.appendChild(gameList);
			var gameTextOutput = gameInfoObject[g][0] + gameInfoObject[g][1];
			gameList.innerHTML = gameTextOutput;
                    }
            }
    }
                                
    //Function to Create all images!
    function imageAddition(consoleValue, createInfo){
        console.log("We have lift off still!!!!!!!!")
	    if(consoleValue === "Xbox 360"){
	    	var imageTag = document.createElement("img");
	    	imageTag.setAttribute("src", "img/xbox360.gif");
	    	createInfo.appendChild(imageTag);
	    } else if (consoleValue === "Playstation 3") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/playstationThree.gif");
	    	createInfo.appendChild(imageTag);
	    } else if (consoleValue === "Wii U") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/wiiU.gif");
	    	createInfo.appendChild(imageTag);  
	    } else if (consoleValue === "PC") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/pc.gif");
	    	createInfo.appendChild(imageTag);
	    } else if (consoleValue === "Playstation Vita") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/playstationVita.gif");
	    	createInfo.appendChild(imageTag);
	    } else if (consoleValue === "Nintendo 3DS") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/nintendo3ds.gif");
	    	createInfo.appendChild(imageTag);
	    } else if (consoleValue === "iPhone/iPad") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/iPhone.gif");
	    	createInfo.appendChild(imageTag);
	    } else if (consoleValue === "Android") {
	    	var imageTag = document.createElement("img");
	    	var imageSource = imageTag.setAttribute("src", "img/android.gif");
	    	createInfo.appendChild(imageTag);
	    }
    }
    
    //This function will automatically display data if there is none in local storage
    function addGameData(){
	    for (var r in gamingData){
		    var idGenerator = Math.floor(Math.random()*1000000000);
		    localStorage.setItem(idGenerator, JSON.stringify(gamingData[r]));
	    }
    }
    
    var xboxDisplay = idGrabber("xboxJSON");
        xboxDisplay.addEventListener("click", xboxFetch)
});*/