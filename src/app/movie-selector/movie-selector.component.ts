import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-selector',
  templateUrl: './movie-selector.component.html',
  styleUrls: ['./movie-selector.component.css']
})
export class MovieSelectorComponent {
  @Input() movie;
  @Output() select = new EventEmitter();
  constructor() { }

  onClick(){
    this.select.emit();
  }
  

}