var currentScreen = 1;

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