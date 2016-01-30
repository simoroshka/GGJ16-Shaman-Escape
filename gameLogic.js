var currentScreen = 1;
var dayNight = 0; //0 = day, 1 = night

var OBJ_SIZE = 80;

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
	
	
	
	scrollDown: function () {
		console.log(this.position);
		if (this.position + this.slots < this.objects.length)
		{
			this.position++;
		}		
		
	},
	scrollUp: function () {

		if (this.position > 0) this.position--;		
	},
	
	pickObject: function () {
		
		
	},
	
	addObject: function (obj) {
		this.objects.push(obj);		
	},
	
	removeObject: function (slot) {
		
	},
	
	render: function () {
		//context.drawImage(resources.get("img/inventory.jpg"), SCREEN_WIDTH, 0);	
	
		context.fillStyle = "red";
		context.fillRect(SCREEN_WIDTH,0,GAME_WIDTH,GAME_HEIGHT);
		
		var k = 0;
		for (var i = this.position; i < this.objects.length; i++) {
			
			var x = SCREEN_WIDTH + 10;
			var y = k * OBJ_SIZE + 10 * k + IN_BUTTON_H;
			//draw the object in the appropriate place
			context.fillStyle = this.objects[i].color;
			context.fillRect(x,y,OBJ_SIZE,OBJ_SIZE);
			
			k++;		
			if (k >= this.slots) break;
		}
	}
	
	update: function() {
		
	}
	
}