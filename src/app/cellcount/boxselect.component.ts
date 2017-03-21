import { Component, OnInit} from '@angular/core';
import { CellcomputeService } from "app/cellcompute.service";
import { Router } from '@angular/router';

@Component({
  selector: 'la-boxselect',
  templateUrl: './boxselect.component.html',
})
export class BoxSelectComponent implements OnInit {

  constructor(private ccs: CellcomputeService, private router: Router) { }

  ngOnInit() {}

  calculateVols() {
    this.ccs.calculateVols();
  }

  boxSelect(id: any) {
    console.log(id);
    this.router.navigate(['../cellcount',id]);
  }

  showVals() {
    console.log("Dilution: " +this.ccs.diluteRatio + "Total Volume: " + this.ccs.totalVolume);
  }
}
