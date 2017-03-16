import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'la-boxselect',
  templateUrl: './boxselect.component.html',
})
export class BoxSelectComponent implements OnInit {

	@Input() totalvolume: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
