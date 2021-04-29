class Rubber {
    constructor(x,y,diameter) {
      var options = {
          isStatic: false,
          'density':1,
          'friction':1.5,
          'restitution':1.1
          


      } 
      this.body = Bodies.circle(this.x,this.y,this.diameter,options);
      this.diameter = diameter
      World.add(world, this.body);
	  this.image = loadImage("paper.png")
    
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER)
      image(this.image,0,0,this.diameter)
	  
      circle(pos.x, pos.y, this.diameter);
    }
  };



