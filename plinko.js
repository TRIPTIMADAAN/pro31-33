class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            density:3
        }
        this.body=Bodies.circle(x,y,10,options)
        this.r=10
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r,this.r)
        }
}