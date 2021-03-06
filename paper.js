class Paper {
    constructor(x,y,width,height) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,25,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

    }
}