import { Component, OnInit, Input, EventEmitter, ElementRef } from '@angular/core';
import { CellcomputeService } from "app/cellcompute.service";

@Component({
  selector: 'la-boxselect',
  templateUrl: './boxselect.component.html',
})
export class BoxSelectComponent implements OnInit {

  constructor(private ccs: CellcomputeService, private elementRef: ElementRef) { }

  ngOnInit() {
  }

  calculateVols() {
    this.ccs.calculateVols();
  }

  boxSelect() {
    this.elementRef.nativeElement.style.backgroundColor='red';
  }

  showVals() {
    console.log("Dilution: " +this.ccs.diluteRatio + "Total Volume: " + this.ccs.totalVolume);
  }
}
