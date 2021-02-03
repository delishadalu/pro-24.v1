class sand
{
    constructor(x,y){
        var options={
            density:1,
            friction:5,
            restitution:0.3
        }

        this.body= Bodies.circle(x,y,5,options)
        World.add(world,this.body)

    }

    display(){
        rectMode(CENTER)
       fill("green")
        ellipse(this.body.position.x,this.body.position.y,10,10)
    }
}