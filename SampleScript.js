function sampleScript()
{
  this.start = function()
  {
    this.parent.getComponent("physics").applyImpulse(0,100);
  }
  /*
  this.onTriggerEnter = function()
  {
    console.log("no");
  }
  
  this.onTriggerExit = function()
  {
    console.log("yes");
  }
  /*
  this.draw = function()
  {
  }
  */
  /*
  this.update = function()
  {
    console.log("BEWARE! I AM THE SAMPLE SCRIPT");
  }
  */
}