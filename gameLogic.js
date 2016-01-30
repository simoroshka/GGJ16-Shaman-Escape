var currentScreen = 1;
var dayNight = 0; //0 = day, 1 = night

function changeScreen(where) {
	
	
	if (where == 'left') {
		switch (currentScreen) {
			case 1: currentScreen = 2; break;
			case 2: currentScreen = 3; break;
			case 3: currentScreen = 5; break;
			case 4: currentScreen = 2; break;
			case 5: currentScreen = 4; break;
			
		}
	} 
	if (where == 'right') {
		switch (currentScreen) {
			case 1: currentScreen = 3; break;
			case 2: currentScreen = 4; break;
			case 3: currentScreen = 2; break;
			case 4: currentScreen = 5; break;
			case 5: currentScreen = 3; break;
			
		}
	} 
	if (where == 'top') {
		switch (currentScreen) {
			case 1: currentScreen = 4; break;
			case 2: currentScreen = 1; break;
			case 3: currentScreen = 1; break;
			case 4: currentScreen = 1; break;
			case 5: currentScreen = 1; break;
			
		}
	} 
	if (where == 'bottom') {
		switch (currentScreen) {
			case 1: currentScreen = 5; break;
		}
	} 
	
	
}

var inventory = {
	slots: 5,			//slots shown on the screen at the same time
	objects: [], 		//list of objects in the inventory
	activeObject: -1,	//active, chosen object (-1 mean no active object)
	position: 0,		//current inventory position
	
	scrollDown: function () {},
	scrollUp: function () {},
	
	
	
}