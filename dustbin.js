

class Dustbin{
    constructor(x, y, width, height) {

      
        var options = {
            'isStatic':true,
            'restitution':false,
            'friction':0.5,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("dustbin.png")
        World.add(world, this.body);
    
    }
    display(){
     var ang=this.body.angle;
     var pos=this.body.position;
     push()
    
        
     rotate(ang)  
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
        pop()
}
}



























