class Paper{
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 0.8
        }

        this.pa = Bodies.circle(x, y, r, options);
        this.r = r;
        this.image = loadImage("paper.png");
        World.add(world, this.pa);
    }

    display(){
        var p = this.pa.position;
        fill("white");
        push()
        translate(p.x, p.y);
        imageMode(RADIUS);
        image(this.image, 0, 0, this.r, this.r);
		strokeWeight(3);
        pop()
    }
}  