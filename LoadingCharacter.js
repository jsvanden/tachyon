function blend(r1,g1,b1,r2,g2,b2,balance)
{
    var bal = Math.min(Math.max(balance,0),1);
    var nbal = 1-bal;
    return(
    {
      r : Math.floor(r1*nbal + r2*bal),
      g : Math.floor(g1*nbal + g2*bal),
      b : Math.floor(b1*nbal + b2*bal)
    });
}   

function LoadingCharacter()
{
  this.character;
  this.characterMovement;
  this.characterBody;
  this.direction = 0;
  this.percent = 0;
  this.continueTimer = 0;
  this.timerLimit = 150;
  
  this.start = function()
  {
    this.character = MainMenu.find("Main Character");
    this.characterMovement = this.character.getComponent("movement");
    this.characterBody = this.character.getComponent("body");
    this.characterMovement.enabled = false;
  }

  this.draw = function()
  {
    var startColor = {r: 255, g: 94, b: 94};
    var endColor = {r: 255, g: 94, b: 94};
    
    if(this.characterMovement.tier == 1)
    {
      startColor = {r: 234, g: 234, b: 234};
      endColor = {r: 130, g: 135, b: 223};
    }
    else if(this.characterMovement.tier == 2)
    {
      startColor = {r: 130, g: 135, b: 223};
      endColor = {r: 71, g: 218, b: 126};
    }
    else if(this.characterMovement.tier == 3)
    {
      startColor = {r: 71, g: 218, b: 126};
      endColor = {r: 252, g: 238, b: 86};
    }
    else if(this.characterMovement.tier == 4)
    {
      startColor = {r: 252, g: 238, b: 86};
      endColor = {r: 255, g: 94, b: 94};
    }
    
    
    console.log(this.characterMovement.tier)
    this.loadColor = blend(startColor.r , startColor.g, startColor.b, endColor.r , endColor.g, endColor.b,(this.characterMovement.ramp / 180)) 
    
    context.font = "30px sans-serif";
    context.textAlign = "center";
    context.textBaseline = 'middle';
    context.fillText("Hold shift to start.",320,130);
    
    context.save();
    context.translate(320,380);
    
    context.fillText(Math.floor(this.percent) + "%",0,0);
    
    context.rotate(-90*Math.PI/180);
    
    context.beginPath();
		context.arc(0, 0, 50, Math.PI * 2, 0, true);
		context.strokeStyle = '#efefef';
    context.lineCap = 'round'; // butt, round or square
		context.lineWidth = 7
		context.stroke();
    
		context.beginPath();
		context.arc(0, 0, 50, 0, Math.PI * 2 * (this.percent/100), false);
		context.strokeStyle = 'rgb(' + this.loadColor.r + ',' + this.loadColor.g + ',' + this.loadColor.b + ')';
    
    //context.strokeStyle = 'rgb(0,0,0)';
    context.lineCap = 'round'; // butt, round or square
		context.lineWidth = 7
		context.stroke();
    
    context.restore();
  }
  
  this.update = function()
  {
    if(this.continueTimer == 0)
    {
      this.percent = (100 / (this.characterMovement.tierCap-1)) * (this.characterMovement.ramp / 180) + ((this.characterMovement.tier-1) * (100 / (this.characterMovement.tierCap-1)));
    }
    
    if(this.characterMovement.tier == this.characterMovement.tierCap)
    {
      this.percent = 100;
    }
    
    if(this.percent == 100)
    {
      this.continueTimer++;
    }
    
    if(this.continueTimer >= this.timerLimit)
    {
      g_currentLevel = 1;
      sceneManager.play("Transition Level");
    }
    
    if (InputManager.isPressed("shift") || this.percent == 100)
    {
      this.characterBody.applyForce(this.direction, 1000);
      this.characterMovement.ramp += this.characterMovement.fillSpeed;
      
      if (this.characterMovement.ramp > 180)
      {
        this.characterMovement.ramp = 0;
        this.characterMovement.tier++;
      }
    }
    else
    {
      this.characterMovement.ramp -= 8;
      if (this.characterMovement.ramp < 0 && this.characterMovement.tier > 1)
      {
        this.characterMovement.ramp = 170;
        this.characterMovement.tier--;
      }
      else
      {
        if (this.characterMovement.ramp < 0)
        {
          this.characterMovement.ramp = 0;
        }
      }
    }
    
    if(this.character.x > 560)
    {
      this.direction = 180;
    }
    
    if (this.character.x < 80)
    {
      this.direction = 0;
    }
    
    if(this.character.x > 600)
    {
      this.character.x = 600;
      this.characterBody.applyForce(180, 1000);
    }
    
    if (this.character.x < 40)
    {
      this.character.x = 40;
      this.characterBody.applyForce(0, 1000);
    }
  }
}