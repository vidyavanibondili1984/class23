class Box{
 constructor(x,y,width,height)
 {
     var opt={
         restitution:0.8
     }
     this.body=Bodies.rectangle(x,y,width,height,opt);
     World .add(world,this.body);
 }   
 display()
 {
     var pos=this.body.position;
     rectMode(CENTER);
     fill ("white");
     rect(pos.x,pos.y,this.width,this.height);
 }
}