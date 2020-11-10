class Bin{
    constructor(x, y, width, height){
        var bin_options = {
            isStatic: true
        }

        this.dustbin = Bodies.rectangle(x, y, width, height, bin_options);
        this.w = width;
        this.h = height;
    }

    display(){
        var b = this.dustbin.position;
        rectMode(CENTER)
        fill("white");
        rect(b.x, b.y, this.w, this.h);
    }
}