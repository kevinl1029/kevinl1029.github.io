import { Component, OnInit} from '@angular/core';
import { CellcomputeService } from '../cellcompute.service';
import { Router } from '@angular/router';

@Component({
  selector: 'la-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

  constructor(private ccs: CellcomputeService, private router: Router) {}

  onSend(diluteInput: any, totalVolumeInput: any){
  	this.ccs.addData(diluteInput, totalVolumeInput);
    this.router.navigateByUrl('/boxselect');
  };

  onLog(value: string) {
    this.ccs.writeToLog(value);
  }

  ngOnInit() {
  }

}
