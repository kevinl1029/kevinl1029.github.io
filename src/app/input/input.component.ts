import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CellcomputeService } from '../cellcompute.service';

@Component({
  selector: 'la-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

  diluteInput = '';
  totalVolumeInput = '';

  constructor(private ccs: CellcomputeService) {}

  diluteRatioOptions = [
    '1/2',
    '1/4',
    '1/8',
    '1'];

  onSend(diluteInput: any, totalVolumeInput: any){
  	this.ccs.addData(diluteInput, totalVolumeInput);
  };

  onLog(value: string) {
    this.ccs.writeToLog(value);
  }

  ngOnInit() {
  }

}
