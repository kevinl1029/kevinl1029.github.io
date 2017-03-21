import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CellcomputeService {
  constructor() { }

  diluteRatioOptions = [
    '1/2',
    '1/4',
    '1/8',
    'No'];

  diluteRatio: any = '1/4';
  totalVolume: number = null;
  boxesRecorded: string [] = [];
  liveCellCount: number [] = [];
  deadCellCount: number [] = [];
  c10k: any = "Dilution Volume will show here";
  c30k: any = "Dilution Volume will show here";
  c50k: any = "Dilution Volume will show here";
  c100k: any = "Dilution Volume will show here";
  c200k: any = "Dilution Volume will show here";
  c250k: any = "Dilution Volume will show here";
  c500k: any = "Dilution Volume will show here";

  addData(diluteInput: any, totalVolumeInput: any) {
    this.totalVolume = totalVolumeInput;
    this.diluteRatio = diluteInput;
    this.writeToLog('DiluteRatio: '+ this.diluteRatio + 'Total Volume:' + this.totalVolume);
  }

  writeToLog(logmessage: any) {
    console.log(logmessage);
  }

  boxCheck(id: string) {
    if(this.boxesRecorded.indexOf(id) > -1) {
      // console.log('Method ran');
      return false;
    }
    return true;
  }

  cellArraySubmit(liveCellInput: number, deadCellInput: number, id: string) {
    this.liveCellCount.push(liveCellInput);
    this.deadCellCount.push(deadCellInput);
    this.boxesRecorded.push(id);
    this.writeToLog('LiveCellCount' + this.liveCellCount + 'DeadCellCount'+ this.deadCellCount);
  }

  calculateVols() {
    var diluteRatioCalc = '';
    var totalLiveCellCount: number = 0;
    var totalDeadCellCount: number = 0;
    if (this.diluteRatio = 'No') {
      diluteRatioCalc = '1';
    };
    console.log("DiluteRatioCalc: " + diluteRatioCalc);
    totalLiveCellCount = this.liveCellCount.reduce(
      function(a,b) {
        return a+b;
      }
    )
    this.writeToLog('totalLiveCellcount:'+ totalLiveCellCount);
    totalDeadCellCount = this.deadCellCount.reduce(
      function(a,b) {
        return a+b;
      }
    )
    var totallivecells: number = (totalLiveCellCount)/(this.liveCellCount.length)*(1/parseInt(diluteRatioCalc))*10000*(this.totalVolume);
    this.c10k = 10000 / totallivecells;
    this.c30k = 30000 / totallivecells;
    this.c50k = 50000 / totallivecells;
    this.c100k = 100000 / totallivecells;
    this.c200k = 200000 / totallivecells;
    this.c250k = 250000 / totallivecells;
    this.c500k = 500000 / totallivecells;
  }

  reset() {
    this.diluteRatio = '1/4';
    this.totalVolume = null;
    this.boxesRecorded = [];
    this.liveCellCount = [];
    this.deadCellCount = [];
    this.c10k = "Dilution Volume will show here";
    this.c30k = "Dilution Volume will show here";
    this.c50k = "Dilution Volume will show here";
    this.c100k = "Dilution Volume will show here";
    this.c200k = "Dilution Volume will show here";
    this.c250k = "Dilution Volume will show here";
    this.c500k = "Dilution Volume will show here";
  }
}
