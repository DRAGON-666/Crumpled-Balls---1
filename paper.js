class Paper {
 
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.circle(x, y,50, options);

      this.width = 50;

      this.height = 50;
      
      World.add(world, this.body);

      
    }
    display(){
      var pos =this.body.position;
      
     
    
      var angle =this.body.angle;
      push ();
  
      translate(pos.x,pos.y);
  
      rotate(angle);
  
      rectMode(CENTER);
  
      fill('pink');
  
      rect(0,0, this.width, this.height);
  
      pop ();
      
    }

   
  };

 
  