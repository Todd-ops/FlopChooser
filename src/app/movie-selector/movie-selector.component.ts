import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-selector',
  templateUrl: './movie-selector.component.html',
  styles: [
    'div { cursor:pointer; }',
    'img {width:8rem; height:auto}'
  ]
})
export class MovieSelectorComponent {
  @Input() movie;
  @Output() select = new EventEmitter();
  constructor() { }

  onClick(){
    this.select.emit();
  }
  

}