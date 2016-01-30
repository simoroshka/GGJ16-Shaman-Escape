var canvas;
var context;

var GAME_WIDTH = 700;
var SCREEN_WIDTH = 600;
var INVENTORY_WIDTH = 100;
var GAME_HEIGHT = 500;
var INTER_SIZE = 40;
var IN_BUTTON_H = 30;

var isGameOver = false;
var gameTime = 0;
var showingCredits = false;

var mousePos = {x:0,y:0};

// the game loop
var lastTime;
function main() {
	
    var now = Date.now();
    var deltaTime = (now - lastTime) / 1000.0;

    update(deltaTime);
    render();

    lastTime = now;
    requestAnimFrame(main);
	
	
};

// the update 
function update(deltaTime) {
	gameTime += deltaTime;	
	
	if (!isGameOver) {
		//UPDATE ALL OBJECTS
	}
	
	else {
		//SHOW END SCREEN
	}
}

// draw everything!
function render() {
	
	
	
	if (!isGameOver) {
		//draw background
		backgroundRender();
		
		//draw inventory
		inventory.render();
		
		//draw any controls
		
		//draw objects
		
	}	
	else {		
		//draw end sreen
	}
	
	if (showingCredits) {
		showCredits();
	}
	
}

// left click
function handleMouseClick(event) {
	var pos = calcMousePos(event);
	
	if (!isGameOver) {
		//check if anything interactable clicked
		
		//check for screen change areas
			//left side
		if (pos.x < INTER_SIZE && pos.y > INTER_SIZE && pos.y < GAME_HEIGHT - INTER_SIZE) {
			changeScreen('left');
		}
		//right side
		else if (pos.x > SCREEN_WIDTH - INTER_SIZE &&
				 pos.x < SCREEN_WIDTH && 
				 pos.y > INTER_SIZE && pos.y < GAME_HEIGHT - INTER_SIZE) {
			changeScreen('right');
		}
		//top
		else if( pos.x > INTER_SIZE && pos.x < SCREEN_WIDTH - INTER_SIZE &&	pos.y < INTER_SIZE) {

			changeScreen('top');
		}
		//bottom
		else if( pos.x > INTER_SIZE && pos.x < SCREEN_WIDTH - INTER_SIZE &&	
				 pos.y < GAME_HEIGHT && pos.y > GAME_HEIGHT - INTER_SIZE) {
					 
			changeScreen('bottom');
		}		 
		
		//detect inventory scroll
		if (pos.x > SCREEN_WIDTH && pos.y < IN_BUTTON_H) {
			inventory.scrollUp();
		}
		else if (pos.x > SCREEN_WIDTH && pos.y > GAME_HEIGHT - IN_BUTTON_H) {
			inventory.scrollDown();
		}
		
		
		//act accordingly
		
		
		
	}
	else {
		//depending on the end screen
	}
	
}
// left click
function handleMouseMove(event) {
	mousePos = calcMousePos(event);
}



//get mouse click coordinates
function calcMousePos(event) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = event.clientX - rect.left - root.scrollLeft;
	var mouseY = event.clientY - rect.top - root.scrollTop;
	return {
		x: mouseX,
		y: mouseY
	};
}
// start the game
function init() {
	reset();
	inventory.addObject({name: 'test', color: 'white'});
	inventory.addObject({name: 'test', color: 'pink'});
	inventory.addObject({name: 'test', color: 'blue'});
	inventory.addObject({name: 'test', color: 'yellow'});
	inventory.addObject({name: 'test', color: 'black'});
	inventory.addObject({name: 'test', color: 'green'});
	inventory.addObject({name: 'test', color: 'violet'});
	
    lastTime = Date.now();
    main();
}

// reset to the initial state
function reset() {
	//erase game state
	isGameOver = false;	
	gameTime = 0;
	
	
	
}
// get the canvas and display loading screen, setup mouse input thing
window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	context = canvas.getContext('2d');
	
	canvas.addEventListener('mousedown', handleMouseClick);
	canvas.addEventListener('mousemove', handleMouseMove);
	
	displayLoadingScreen();
	
	//load and start music
	//backgroundMusic.loopSong("sounds/bgmusic.mp3");
	
	//load graphics and start the game once it's done
	resources.load(getLoadArray());
	resources.onReady(init);
	
}


function getLoadArray() {
	var array =	[
		
		
		//all graphic assets
	];
	//push more if needed
	for (var i = 1; i <= 5; i++) {
		array.push('img/bg'+i+'.jpg');
	}
	
	return array;
}

function displayLoadingScreen() {
	//blank the screen
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	//display message
	context.fillStyle = '#ddd';
	context.font = 'bold 40px Roboto Condensed';
	context.fillText("LOADING...", canvas.width / 2 - 100, canvas.height / 2 - 10);
}
function showCredits() {
	//context.drawImage(resources.get("img/credits.jpg"), 0, 0);	
}

function mute() {
	if (!muted) {
		backgroundMusic.pause();
		muted = true;
	}
	else {
		backgroundMusic.play();
		muted = false;
	}
	
}

// A cross-browser requestAnimationFrame
// See https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

