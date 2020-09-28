class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(this.sling.bodyA.position.x>200){
                strokeWeight(6);
            }else{
            strokeWeight(10);
            }
            
            stroke(48, 22, 8);
            line(pointA.x-20, pointA.y-5, pointB.x-15, pointB.y);
            line(pointA.x-20, pointA.y-5, pointB.x+20, pointB.y-3);
            image(this.sling3, pointA.x-25, pointA.y-20, 15, 30);
        }

        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
    }
    
}