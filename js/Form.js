class Form {
  
  constructor() {
    this.title = createElement('h2')
    this.input = createInput("name");
    this.button = createButton("Play");
    this.greeting = createElement('h3');
 }
hide(){
  this.greeting.hide();
  this.button.hide();
  this.input.hide();
  this.title.hide();
}

  display(){
   
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-30,0);
   
    this.input.position(displayWidth/2-40,displayHeight/2-30);  
    this.button.position(displayWidth/2+40,displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-70,displayHeight/4);
    });

  }
}
