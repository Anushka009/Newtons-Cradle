class Bob{
    constructor(x,y,RADIUS) {
        var options ={
          isStatic : false,    
          restitution : 1,
          friction : 0,
          density : 0.8
        }
        this.body = Bodies.circle(x,y,RADIUS,options);
        this.radius = RADIUS;

        World.add(world,this.body);
      }
        display()         
        {
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x,pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill("pink");
          ellipse(0,0,this.radius,this.radius);
          pop();
        }
    }