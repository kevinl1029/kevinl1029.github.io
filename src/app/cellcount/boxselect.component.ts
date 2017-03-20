import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { CellcomputeService } from "app/cellcompute.service";

@Component({
  selector: 'la-boxselect',
  templateUrl: './boxselect.component.html',
})
export class BoxSelectComponent implements OnInit {

	@Input() totalvolume: number = 0;

  constructor(private ccs: CellcomputeService) { }

  ngOnInit() {
  }

  calculateVols() {
    this.ccs.calculateVols();
  }
}
