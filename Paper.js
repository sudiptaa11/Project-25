class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0,
            density : 1.2
        }
        this.paperBody = Bodies.circle(x,y,radius,options);
        this.w = 50;
        this.h = 50;
        this.r = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.paperBody);
    }

    display() {
        var pos = this.paperBody.position;
        var angle = this.paperBody.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();

    }
    
}