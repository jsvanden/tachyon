// JavaScript source code
function twoButtons()
{
    var gTime = 0;
    var rTime = 0;
    var clock = 3;

    this.start = function ()
    {
        door = this.parent.getComponent("door").getComponent("body");
        green = this.parent.getComponent("green").getComponent("body");
        red = this.parent.getComponent("red").getComponent("body");
    }

    green.onTriggerEnter(){
        //change sprite to down
        gTime = 60;
    }
    
    red.onTriggerEnter(){
        //change sprite to down
        rTime = 60;
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