class Ground{
    constructor(x, y, width, height){
        var grnd_options = {
            isStatic: true
        }

        this.grd = Bodies.rectangle(x, y, width, height, grnd_options);
        this.width = width;
        this.height = height;

        World.add(world, this.grd);
    }

    display(){
        var p = this.grd.position;
        rectMode(CENTER);
        fill("red");
        rect(p.x, p.y, this.width, this.height);
    }
}