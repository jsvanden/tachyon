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
    var isOpen = false;
    var opening = 0;
    var drainSpeed = 1;
    var tierEffect = 3;
	
    this.start = function ()
    {
        player = Level_1.find("Main Character");
        clock = player.getComponent("movement").tier;
        cap = player.getComponent("movement").tierCap;
        green = this.parent.getComponent("green").getComponent("body");
        red = this.parent.getComponent("red").getComponent("body");
        
        green.onTriggerEnter = function(){
			green.parent.getComponent("sprite").image.src = 'resources/images/greenDown.png';
			gTime = 60*cap;
            console.log("on green")
        }
        
        red.onTriggerEnter= function(){
            red.parent.getComponent("sprite").image.src = 'resources/images/redDown.png';
            rTime = 60*cap;
            console.log("on red")
        }
    }

    this.update = function () {
        clock = player.getComponent("movement").tier;
        cap = player.getComponent("movement").tierCap;
        
        
        if(gTime>0 && rTime>0 && !isOpen && opening == 0){
            opening = 30;
        }
        if (opening > 0) {
            opening--;
            if (opening == 0) {
                this.openDoor();
                isOpen = true;
            }
        }
        if (gTime > 0 && opening == 0) {
            gTime -= ((drainSpeed * cap) / (clock/tierEffect));
        }
        else {
            green.parent.getComponent("sprite").image.src = 'resources/images/greenUp.png';
        }
        if (rTime > 0 && opening == 0) {
            rTime -= ((drainSpeed * cap) / (clock/tierEffect));
        }
        else {
            red.parent.getComponent("sprite").image.src = 'resources/images/redUp.png';
        }
        
        if (gTime < 0) {
            gTime = 0;
        }
        if (rTime < 0) {
            rTime = 0;
        }
    }
    
    this.draw = function()
    {
        if (!isOpen) {
            context.beginPath();
            context.arc(296, 46, 5, 0, Math.PI * 2 * gTime / (60 * cap));
            context.strokeStyle = '#00FF00';
            context.lineWidth = 11;
            context.stroke();
            //context.fillRect(20,20,150,100);
            context.beginPath();
            context.arc(344, 46, 5, Math.PI, (Math.PI * 2 * rTime / (60 * cap)) + Math.PI, false);
            context.strokeStyle = '#FF0000';
            context.lineWidth = 11;
            context.stroke();
        }
    }
	
	this.openDoor = function()
	{
		var door = Level_1.find("Button System").getComponent("door");
		door.getComponent("sprite").image.src = 'resources/images/OpenDoor.png';
		door.getComponent("sprite").width = 125;
		door.getComponent("body").turnIntoTrigger();
		door.getComponent("body").onTriggerEnter = function()
		{
			sceneManager.play("Level 2");
		}
	}
}


