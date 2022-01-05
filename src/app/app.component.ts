import { Component } from '@angular/core';
import { FlopChooserService } from './flop-chooser.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  flops;
  isCorrect = false;
  hasChosen = false;

  constructor(public flopChooser: FlopChooserService ) {

  }

  ngOnInit(){
    this.selectNewFlop()
  }

  selectNewFlop(){
    this.flops = this.flopChooser.getTwoRandomFlops();
  }

  onFirstSelected(){
    if(!this.hasChosen){
      this.hasChosen = true;
      this.isCorrect = this.flopChooser.isChoiceCorrect(this.flops.first, this.flops.second)
      console.log(this.isCorrect)
    }
    
  }

  onSecondSelected(){
    if(!this.hasChosen){
      this.hasChosen = true;
      this.isCorrect = this.flopChooser.isChoiceCorrect(this.flops.second, this.flops.first)
      console.log(this.isCorrect)
    }
    
  }

  onPlayAgainClicked(){
    this.hasChosen = false;
    this.selectNewFlop();
  }

  // Feel free to put your own data here if you have other favorite flops
  
	



}
