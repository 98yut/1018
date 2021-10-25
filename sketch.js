let numX=3;
let numY=3;

let bs=[];

function setup(){
  createCanvas(400,400);
  
  for(let i=0;i<numX;i=i+1){
    for(let j=0;j<numY;j=j+1){
      //put in []list
      //xxx.push(new item)
      bs.push(new Ball(i*width/numX+width/numX/2,
                      j*height/numY+height/numY/2));
    }
  }
}

function draw(){
  background(130,130,200);
  //各自執行
  //xxx.foreach((v))=>{v.display();});
  bs.forEach((v)=>{
    v.display();
  });
}

// 物件導向格式
class Ball{
  // 建構
  constructor(x,y,s=20){
    this.x=x;
    this.y=y;
    this.size=s;
    this.movex =random(-1.0,1.0);
    this.movey =random(-1.0,1.0);
  }
  // 能力為何
  display(){
    this.selfbounce();
    this.bounce();
    this.move();
    circle(this.x,this.y,this.size);
  }
  move(){
    this.x = this.x + this.movex;
    this.y = this.y + this.movey;
  }
  bounce(){
    // 上方反彈
    if (this.y-this.size/2<0){
      this.movey = -1*this.movey;
      
      background(255);
      fill(0);stroke(255,255,0)
    }
    // 上方反彈
    if (this.y+this.size/2>height){
      this.movey = -1*this.movey;
      
      background(255);
      fill(0);stroke(255,255,0)
    }
    // 左方反彈
    if (this.x-this.size/2<0){
      this.movex = -1*this.movex;
      
      background(255);
      fill(0);stroke(255,255,0)
    }
    // 上方反彈
    if (this.x+this.size/2>width){
      this.movex = -1*this.movex;
      
      background(255);
      fill(0);stroke(255,255,0)
    }
  }
  // 物件彼此反彈
  selfbounce(){
    bs.forEach((nb)=>{
      if (nb === this){
        // 若不是自己
        console.log('a');
        
        fill(255,255,115);stroke(0)
        
      }else{
        // 若x方向距離太近
        if (abs(this.x-nb.x)<this.size && 
            dist(this.x,this.y,nb.x,nb.y)<this.size)
          {this.movex=-1*this.movex;
           
           fill(0);stroke(255,255,0)
           scale(2)
           
           }
        if (abs(this.y-nb.y)<this.size&& 
            dist(this.x,this.y,nb.x,nb.y)<this.size)
          {this.movey=-1*this.movey;
           
           fill(0);stroke(255,255,0)
           scale(2)
           
           }
      }
      
      });
  }
}