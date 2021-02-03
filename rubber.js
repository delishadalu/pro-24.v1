class rubber
{
    constructor(){
        var options={
            density:1,
            friction:5,
            restitution:0.3
        }

        this.body= Bodies.circle(500,500,20,options)
        World.add(world,this.body)

    }

    display(){
       fill("blue")
        ellipse(this.body.position.x,this.body.position.y,40,40)
    }
}