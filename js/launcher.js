class Launcher {
    constructor(bodyA,pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            lenght:10,
        }
        this.launch = Matter.Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.launch)
    }
  
    fly(){
        this.launch.bodyA = null;
    }
  
   display(){
       if(this.launch.bodyA){
       strokeWeight(3)
       line(this.launch.bodyA.position.x, this.launch.bodyA.position.y, this.pointB.x, this.pointB.y);
    }
   }
  
  }