/*||||||||||||||||||||||||||||||||||||||||||||||||||||
|||||||||||||||||||||||mainMenu.js||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||
https://jsfiddle.net/7vq3hvkw/7/				
        DOCUMENTATION
var layer: keeps track of the GUI layer in use. This is what the script uses to know what to display. (the main menu = 2, pause screen = 1 and the game screen = 0) **
var exit: tracks whether or not to run the menuLoop() function. It is activated by hitting ESCAPE at the main menu (layer = 2)
var x,y: used solely for the main menu particle. Not needed otherwise 
var keyPressed: an important varible that holds the data of the keyPressed. **
var currButton: holds the data of what button is in each layer is being used. Important for determing both the select()(pressing enter doing something) and cursor()(visual guide as to what button is being used) are focusing on. **
var numButtons: a simple variable that is told how many buttons there are per menu. It exists so that cursor() and select() do not go out of bounds. This will be expanded in the future as it is VERY simple right now and does not support each menu layer having different number of buttons.

function checkKey(key): the function that uses a switch to cause different effects based upon 'key' input given by keyPressed event listener or outside call.
function escape(layer,currButton): called by the ESCAPE key and fascilitates alternative exiting of pause menu as well as "exiting" the game when at the main menu. (If it is at layer 2 then it changes the value of the exit variable) Currently takes 2 inputs, layer and currButton. These are both global variables in the script but they can be called outside the function 
function cursor(layer,currButton): creates the button overlay (right now blue text) that provides a visual cue as to what button is active. Currently takes 2 inputs, layer and currButton. These are both global variables in the script but they can be called outside the function
function select(): works with the visual cursor() function to cause an effect when it is called. Currently called by ENTER
function drawGui(): creates all the visual elements
function particle(): creates the menu screen particle.
function setDefaults(): resets any change in formatting to defaults.

	General Run Effect
Script uses keyboard input to change the layer and currButton variables to express the areas of interest. The cursor() function highlights text in blue that is active and when ENTER is pressed, the select() function causes an action to occur. Furthermore, ESC has different effects at the different menus.

	Notes for user
The menu is relatively simple right now but can be improved upon easily
The checkKey() function has more checks for keys than are used, as such it can be used for future events involving audio.



	Most likely Method Calls
	
mainMenu.select(layer,currButton) for choosing a button on a specific layer 
mainMenu.cursor(layer,currButton) for moving the visual feedback guide to a specific button. Normally done via arrow keys. Does not cause any other action.
mainMenu.escape(layer.currButton) for invoking either close(layer = 1)/open(layer = 0) pause menu or "quit" from the main menu(layer = 2)
mainMenu.checkKey(KEYPRESSED) for providing keyboard input to the function to act upon. It is already set up to do the menu actions within the script through the various functions that are called by key presses that are handled by this function. Essentially handles all keyboard actions. **
mainMenu.drawGui() a function that when looped, draws all the visual UI elements. Normally called in mainMenu.loop()
mainMenu.loop() for looping all the visual elements including drawGui() and cursor(). Handles all visuals. **
mainMenu.setDefaults() for changing any UI changes done outside of direct script calls. All the functions within this script call it when neccessary so it would only need to be used if a change was made to the font/color using a function outside the script. 
*/





//Currently set up to use ENTER to select the button. ESC to pause/unpause/quit. UP and DOWN to cycle what button is active

//////////////////////////////////////
////////////////SCRIPT////////////////
//////////////////////////////////////



var canvas = document.getElementById('mygame');
var context = canvas.getContext('2d');

var x = 0,y = 0;  //solely used for menu particle

var layer = 2;  //keeps track of the current menu open and initial layer
var text = document.getElementById("");
var exit = false;

document.addEventListener("keypress",keyPress);

var keyPressed = -1;
var currButton = 0;
var numButtons = 2; //number of buttons that every menu has. It is currently a simple implementation that can be improved upon when i know more about what out menu needs to look like.



function keyPress(e){
	keyPressed = e.keyCode
	if(exit == false)checkKey(keyPressed);;
}    

function escape(tempLayer){ //pauses and unpauses if within layer0(game screen) or layer1(pause screen) respectively 
	if(tempLayer == 1){layer= 0
	}else if(tempLayer==0){layer=1
	}
}//

function select(tempLayer,currButton){ //does an action based upon what is the currButton and layer
    console.log("select")
    console.log("layer"+tempLayer +" currButton:"+currButton)
    if(tempLayer == 1){  //pause menu "Continue"
		if(currButton == 0){
			console.log("chosen 1.0");
			tempLayer = 0;
		}else if(currButton == 1){  //pause menu "Main Menu"
			//d//console.log("chosen 1.1");
			tempLayer = 2;
			currButton = 0;
		}
    } else if(tempLayer == 2){
		if(currButton == 0){  //main menu "Start New Game"
			console.log("chosen 2.0");
			tempLayer = 0;
		}else if(currButton == 1){ //main menu "Continue Game"
			console.log("chosen 2.1");
			tempLayer = 0;
		}
	} else {}
	layer = tempLayer//used to effect global changes outside the function
}//end select


function cursor(layer,currButton){//shows a visual overlay over the active button. See select() for what layer + currButton combinations correspond to what visual buttons
	//d// console.log("layer: "+layer+" button: "+button)
	if(layer == 1){
		if(currButton == 0){
			context.fillStyle = 'blue';
			//d//console.log("over 1.0");
			context.fillText('Continue',canvas.width/3+20,canvas.height/2-canvas.width/8+40); 
        }else if(currButton == 1){
			//d//console.log("over 1.1")
			context.fillStyle = 'blue';
			context.fillText('Main Menu',canvas.width/3+10,canvas.height/2+canvas.width/8+40)
		}
    } else if(layer == 2){
		if(currButton == 0){
			//d//console.log("over 2.0")
			context.fillStyle = 'blue';
			context.fillText("Start New Game",canvas.width/5+canvas.width*1/10, canvas.height/2-canvas.width/5.5)
		}else if(currButton == 1){
			//d// console.log("over 2.1")
			context.fillStyle = 'blue';
			context.fillText("Continue Game",canvas.width/5+canvas.width*1/10, canvas.height-canvas.width/2);
		}
    }
	setDefaults();
}//end cursor


function checkKey(key){  //handles causing things when the correct keyboard key is pressed
	switch(key){
		case 27:   // escape
			console.log("esc");
			escape(layer,currButton);
			if(layer == 2)exit = true,console.log(exit);
			break;
		case 13:
			console.log("enter")
			select(layer,currButton);
			break;
		 
		case 38: 
			console.log("up")
			if(currButton > 0)currButton--;;
			break;
		case 37: 
			console.log("left")
			break;
		case 39: 
			console.log("right")
			break;
		case 40: 
			console.log("down")
			if(currButton<numButtons-1)currButton++;;
			break;
		   
		case 65: 
			console.log("a")
			break;
		case 87: 
			console.log("w")
			if(currButton > 0)currButton--;;
			break;
		case 68: 
			console.log("d")
			break;
		case 83:
			console.log("s")
			if(currButton<numButtons-1)currButton++;;
			break;
		default:
	}
}//end checkKey 



function menuLoop(){//handles all changes in visuals but not the keyboard 
	if(exit == false){   // if normal play. i.e. if they have they not clicked the X on the menu
		canvas.width = canvas.width;;
    if(layer == 2)context.fillRect(x,y,20,20),particle();; //is used to spawn particle when in main menu
	drawGui(layer);
	//console.log("layer: "+layer);
	drawBorder();
	cursor(layer,currButton);//handles the visuals for what button you have selected
	}else{  // if the player clicks the X or if they lose
	canvas.width = canvas.width
    }    
//console.log("current button: "+currButton);   
}//end menuLoop



setInterval(menuLoop,30);




function drawGui (){   //creates the visual boxes for the UI
	if(layer == 0){
		context.font = '24pt Calibri';
		context.fillRect(0,0, canvas.width/5, canvas.height/15);
		context.fillStyle = 'white';
		context.fillText('PAUSE',10,30);
		setDefaults();
     
  
	}else if(layer == 1){// pause
		context.fillStyle = 'gray'
		context.fillRect(0,0,canvas.width,canvas.height)   //gray background
		context.fillStyle = 'black';
		 
		context.fillRect(canvas.width/3,canvas.height/2-canvas.width/8,     canvas.width/3, canvas.height/10);
		context.fillRect(canvas.width/3,canvas.height/2+canvas.width/8, canvas.width/3, canvas.height/10); //black squares
		 
		context.font = '24pt Calibri';
		context.fillStyle = 'white';
		context.fillText('Main Menu',canvas.width/3+10,canvas.height/2+canvas.width/8+40); //text within squares
		context.fillText('Continue',canvas.width/3+20,canvas.height/2-canvas.width/8+40);
		 
		context.font = '40pt Calibri';
		context.fillText('PAUSED', canvas.width/4+30,canvas.height/5);  //word PAUSED above everything
		setDefaults();
		 
          
	}else if(layer == 2){// main menu stuff
		context.font = '45pt Calibri'      
		context.fillStyle = 'blue'
		context.fillText("TACHYON",canvas.width/4, canvas.width/10);  //Title
		setDefaults();
		 
		context.fillRect(canvas.width/5,canvas.height/2-canvas.width/4,  canvas.width/1.5, canvas.height/10);                 //Black boxes
		context.fillRect(canvas.width/5,canvas.height-canvas.width/1.75, canvas.width/1.5, canvas.height/10);
		 

		context.strokeRect(canvas.width-60,10,50,50);   //VV  Creates empty rectangle
		context.strokeStyle = 'red';
		context.beginPath();
		context.moveTo(canvas.width-60,10);     
		context.lineTo(canvas.width-10,60);             // This block creates the square with a cross through it. It is offset by 10 from the corner
		context.moveTo(canvas.width-60,60);             
		context.lineTo(canvas.width-10,10)
		context.closePath();
		context.stroke();
		setDefaults();                                   //^^
		 
		 
		context.font = '24pt Calibri'   //Text for the menu boxes
		context.fillStyle = 'white'
		context.fillText("Start New Game",canvas.width/5+canvas.width*1/10, canvas.height/2-canvas.width/5.5);
		context.fillText("Continue Game",canvas.width/5+canvas.width*1/10, canvas.height-canvas.width/2);
		setDefaults();
		 
		 
		/*context.fillRect(canvas.width/5,canvas.height-canvas.height/4, canvas.width/1.5, canvas.height/10);
		context.font = '28pt Calibri'
		context.fillStyle = 'white'
		context.fillText("OPTIONS",canvas.width/5+canvas.width*1/5,canvas.height-canvas.height/4+40); 
		   */   //optional Options menu
   }
}//// end drawGui

function particle(){ // simple function just to test a main menu animated background
	y+=canvas.height/20;
        if(y>canvas.width)x = Math.random()* canvas.width, y = 0;;
}

function setDefaults(){    //Sets all changes to font and such to normal
    context.font = '24pt Calibri';
    context.fillStyle = 'black';
    context.strokeStyle = 'black';
}

function drawBorder(){ //creates thin walls around the canvas
    context.fillRect(0,0,canvas.width,5);                
    context.fillRect(0,0,5,canvas.height);               
    context.fillRect(0,canvas.height-5,canvas.width,5);  
    context.fillRect(canvas.width-5,0,5,canvas.height); 
}