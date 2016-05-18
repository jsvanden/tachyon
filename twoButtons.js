// JavaScript source code
function twoButtons()
{
    var gTime = 0;
    var rTime = 0;
    var clock = 3;
	var script = this;
	
    this.start = function ()
    {
        door = this.parent.getComponent("door").getComponent("body");
        green = this.parent.getComponent("green").getComponent("body");
        red = this.parent.getComponent("red").getComponent("body");
        
        green.onTriggerEnter = function(){
        //change sprite to down
        gTime = 60;
        console.log("on green")
        }
        
        red.onTriggerEnter= function(){
            //change sprite to down
            rTime = 60;
            console.log("on red")
        }
    }

    this.update = function(){
        if(gTime>0 && rTime>0){
            //remove door
        }
        if(gTime>0){
            gTime -= (1*clock/3);
        }
        if(rTime>0){
            rTime -= (1*clock/3);
        }
    }
	
	this.openDoor = function()
	{
		var door = Level_1.find("Button System").getComponent("door");
		door.getComponent("sprite").image.src = 'resources/images/OpenDoor.png';
		door.getComponent("sprite").width = 125;
	}
}