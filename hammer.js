class hammer
{
    constructor(){
        var options={
            density:2,
            friction:1,
            restitution:0.5
        }

        this.body= Bodies.rectangle(100,20,100,20,options)
        World.add(world,this.body)

    }

    display(){
        this.body.position.x=mouseX;
        this.body.position.y=mouseY
        rect(this.body.position.x,this.body.position.y,100,20)
    }
}