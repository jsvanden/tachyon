// JavaScript source code
function twoButtons()
{
    var gTime = 0;
    var rTime = 0;
    var clock;
    var cap;
    var script = this;
    var green;
    var red;
    var player;
	
    this.start = function ()
    {
        player = Level_1.find("Main Character");
        clock = player.getComponent("movement").tier;
        cap = player.getComponent("movement").tierCap;
        green = this.parent.getComponent("green").getComponent("body");
        red = this.parent.getComponent("red").getComponent("body");
        
        green.onTriggerEnter = function(){
            green.parent.getComponent("sprite").image.src = 'resources/greenDown.png';
            gTime = 60*cap;
            console.log("on green")
        }
        
        red.onTriggerEnter= function(){
            red.parent.getComponent("sprite").image.src = 'resources/redDown.png';
            rTime = 60*cap;
            console.log("on red")
        }
    }

    this.update = function () {
        clock = player.getComponent("movement").tier;
        cap = player.getComponent("movement").tierCap;
        if(gTime>0 && rTime>0){
            openDoor();
        }
        if(gTime>0){
            gTime -= (1*cap/clock);
        }
        else {
            green.parent.getComponent("sprite").image.src = 'resources/greenUp.png';
        }
        if(rTime>0){
            rTime -= (1*cap/clock);
        }
        else {
            red.parent.getComponent("sprite").image.src = 'resources/redUp.png';
        }
    }
	
	this.openDoor = function()
	{
		var door = Level_1.find("Button System").getComponent("door");
		door.getComponent("sprite").image.src = 'resources/images/OpenDoor.png';
		door.getComponent("sprite").width = 125;
		door.getComponent("body").isTrigger = true;
	}
}