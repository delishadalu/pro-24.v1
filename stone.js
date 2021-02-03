class stone
{
    constructor(){
        var options={
            density:7,
            friction:1,
            restitution:0.5
        }

        this.body= Bodies.rectangle(100,20,50,50,options)
        World.add(world,this.body)

    }

    display(){
       fill("white")
        rect(this.body.position.x,this.body.position.y,50,50)
    }
}