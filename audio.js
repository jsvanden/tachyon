/*||||||||||||||||||||||||||||||||||||||||||||||||||||
|||||||||||||||||||||||audio.js|||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||
https://jsfiddle.net/ncLumqwn/17/				
        DOCUMENTATION
var rate: keeps track of the playback rate of the song
var songNum: holds the index of the current song
var paused: self explanatory
var songs: an array that holds all the urls for songs

var audacity: an Audio object that is the core for all sound commands

function checkKey: the function that uses a switch to cause different effects based upon input

	General Run Effect
Script uses keyboard input to affect the Rate and to either Pause or Play audio. The spacebar switches tracks forward.

	Notes for user
To add new urls to use, use audio.addSong("URL");
The checkKey() function has more checks for keys than are used, as such it can be used for future events involving audio.



	Most likely Method Calls
	
audio.play()  for playing the current audio track
audio.pause() for pausing the current audio track
audio.stop() for stopping the current track and making it start from the beggining
audio.setRate({floatvalue .5-1.5}) for changing the playback rate of the music **  below or above these values makes it sound very bad and breaks it if below .5
audio.change() for playing the next song in the songs[] array
audio.checkKey(KEYPRESSED)  for passing a key from another script
audio.addSong("URL") for adding the url into the array of songs
audio.selectSong(NUMBER) for selecting a specific song by its index in the songs[] array
*/





//Currently set up to use ENTER to start and pause music. ESC to stop the current song(go to beginning). SPACE to pause and switch tracks. use UP and DOWN to increase and decrese the playback speed respectively.

//////////////////////////////////////
////////////////SCRIPT////////////////
//////////////////////////////////////

var rate = 1;
var songNum = 0; 
var keyPressed = 0;
var paused = true;
var songs = [];
var eggSeen = false;  //easter egg of sorts, set to true to disable 
addSong("http://people.ucsc.edu/~tsericks/CMPM120/Tension.mp3")
addSong("http://people.ucsc.edu/~tsericks/CMPM120/synthpop.mp3")//example songs
addSong("http://people.ucsc.edu/~tsericks/CMPM120/BadTime.mp3")

document.addEventListener("keypress",keyPress);
 
var audacity = new Audio(songs[songNum]);

function keyPress(e){
/*debugging info
console.log("rate: "+rate);
console.log("keyCode: "+e.keyCode);
console.log("global var: "+gIter);
*/
keyPressed = e.keyCode
checkKey(keyPressed);
}    

function pause(){
   console.log("pause")
   if(paused == false){audacity.pause()
   }else{play()}
      paused = !paused
      
    if(songNum == 2 && eggSeen == false){alert("You feel your sins crawling down your back"),eggSeen = true, console.log("seen")};  
}

function stop(){
   console.log("stop")
   audacity.pause();
   paused = true;
   audacity.currentTime = 0;
}


function play(){
   console.log("play")
   audacity.play();
}

function change(){
   console.log("change")
   if(songNum<songs.length-1){songNum++
   }else{songNum = 0}
   audacity.src = songs[songNum];
   paused = true;
   audacity.pause();
   console.log(audacity.src);   
}
function setRate(rate){
   console.log("rate")
	 audacity.playbackRate = rate;
}
function addSong(url){
songs.push(url);
}

function selectSong(num){
songNum = num;
}

function loop(){
   //setRate(rate);   //changes play speed
   //console.log(audacity.playbackRate); //debug
}
setInterval(loop,30);






// optional manual keyboard testing
function checkKey(key){
 switch (key){
   case 0:   //space
      console.log("space");           		
      change();
      break;  
   case 27:   // escape
   	 console.log("esc");
     stop()
     break;
   case 13:
   	 console.log("enter")
     pause();
     break;
     
   case 38: 
   	 console.log("up")
     setRate(rate+=.1)
     console.log(rate);
     break;
   case 37: 
   	 console.log("left")
     break;
   case 39: 
   	 console.log("right")
     break;
   case 40: 
   	 console.log("down")
     setRate(rate-=.1);
     console.log(rate);
     break;
   
   case 65: 
   	 console.log("a")
     break;
   case 87: 
   	 console.log("w")
     break;
   case 68: 
   	 console.log("d")
     break;
   case 83:
   	 console.log("s")
     break;
 
   default:
		 console.log(rate);
     console.log(e.keyCode);
   }
}//end checkKey 

//space = 32 esc = 27   enter = 13
//  ^    38      w     87
// < > 37  39   a s  65  68
//  v    40      d     88