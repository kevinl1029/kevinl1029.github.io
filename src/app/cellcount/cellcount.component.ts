import { Component, OnInit } from '@angular/core';
import { CellcomputeService } from "app/cellcompute.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'la-cellcount',
  templateUrl: './cellcount.component.html',
})
export class CellcountComponent implements OnInit {
  
  liveBoxCount: number= 0;
  deadBoxCount: number= 0;
  id: string;

  constructor(private ccs: CellcomputeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
    if(!this.ccs.boxCheck(this.id)) {
      alert("You've already counted cells for this box.");
      this.router.navigateByUrl('/boxselect');
    }
  }

  liveCellCounter() {
    this.liveBoxCount++;
  }

  deadCellCounter() {
    this.deadBoxCount++;
  }

  addToCellArrays() {
    if (this.liveBoxCount + this.deadBoxCount == 0) {
      if(!confirm('Are you sure you want to submit 0 Live Cells and 0 Dead Cells?')) {
        return;
      }
    }
    // this.ccs.writeToLog(this.liveBoxCount+" " + this.deadBoxCount);
    this.ccs.cellArraySubmit(this.liveBoxCount, this.deadBoxCount, this.id);
    this.liveBoxCount = 0;
    this.deadBoxCount = 0;
    this.router.navigateByUrl('/boxselect');
  }

  back() {
    this.router.navigateByUrl('/boxselect');
  }
  resetCount() {
    if(confirm('Are you sure you want to reset the count?\nCell Counts will be reset.')) {
      this.liveBoxCount = 0;
      this.deadBoxCount = 0;
    }
  }
}

