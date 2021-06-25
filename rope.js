class ropr{
    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
             length:10,
             stiffness:0.04
        }

        this.rope= Constraint.create(options)
        World.add(world,this.rope)

        this.pointB=b;
    }

display(){
line (this.rope.bodyA.position.x, this.rope.bodyA.position.y,
    this.rope.pointB.x,this,rope.pointB.y)
}




}