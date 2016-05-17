function UIButton(x, y, width, height, text)
{
  this.x = x || 0;
  this.y = y || 0;
  this.width = width || 200;
  this.height = height || 100;
  this.text = text || "blank";
  this.hasFocus = true;
  
  this.start = function()
  {
    console.log(this.x, this.y)
  }
  
  this.update = function()
  {
    if (InputManager.isPressed("enter") && this.hasFocus)
    {
      this.onPressed();
    }
  }
  
  this.draw = function()
  {
    // drawing buttons
  }
  
  this.onPressed = function()
  {
  }
}