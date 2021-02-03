class plane
{
    constructor(){
       

        this.body= Bodies.rectangle(400,680,800,20,{isStatic:true})
        World.add(world,this.body)

    }

    display(){
        fill("brown")
        rect(this.body.position.x,this.body.position.y,800,20)
    }
}