import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CellcomputeService } from '../cellcompute.service';

@Component({
  selector: 'la-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

	// totalvolume: number = 0;

	@Output() totalvolume = new EventEmitter<number>();

  constructor() { }

  onClicked(totalvolume: number){
  	// this.totalvolume.emit(totalvolume);
  	alert(this.totalvolume)
  };

  ngOnInit() {
  }

}
