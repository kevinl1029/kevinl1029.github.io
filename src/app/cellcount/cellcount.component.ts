import { Component, OnInit } from '@angular/core';
import { CellcomputeService } from "app/cellcompute.service";

@Component({
  selector: 'la-cellcount',
  templateUrl: './cellcount.component.html',
})
export class CellcountComponent implements OnInit {
  
  liveBoxCount: number= 0;
  deadBoxCount: number= 0;

  constructor(private ccs: CellcomputeService) { }

  ngOnInit() {
  }

  liveCellCounter() {
    this.liveBoxCount++;
  }

  deadCellCounter() {
    this.deadBoxCount++;
  }

  addToCellArrays() {
    this.ccs.writeToLog(this.liveBoxCount+" " + this.deadBoxCount);
    this.ccs.cellArraySubmit(this.liveBoxCount, this.deadBoxCount);
    this.liveBoxCount = 0;
    this.deadBoxCount = 0;
  }
}
