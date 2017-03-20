import { Component, OnInit } from '@angular/core';
import { CellcomputeService } from "app/cellcompute.service";

@Component({
  selector: 'la-output',
  templateUrl: './output.component.html',
})
export class OutputComponent implements OnInit {

  constructor(private ccs: CellcomputeService) { }

  ngOnInit() {
  }

}
