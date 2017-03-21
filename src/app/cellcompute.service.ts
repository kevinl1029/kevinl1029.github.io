import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CellcomputeService {
  constructor() { }

  diluteRatioOptions = [
    '1/2',
    '1/4',
    '1/8',
    '1'];

  diluteRatio: any = '1/4';
  totalVolume: number = null;
  liveCellCount: number []= [];
  deadCellCount: number []= [];
  deadBoxCount: number = 0;
  liveBoxCount: number = 0;
  totalLiveCellCount: number = 0;
  totalDeadCellCount: number = 0;
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

  cellArraySubmit(liveCellInput: number, deadCellInput: number) {
    this.liveCellCount.push(liveCellInput);
    this.deadCellCount.push(deadCellInput);
    this.writeToLog('LiveCellCount' + this.liveCellCount + 'DeadCellCount'+ this.deadCellCount);
  }

  calculateVols() {
    this.totalLiveCellCount = this.liveCellCount.reduce(
      function(a,b) {
        return a+b;
      }
    )
    this.writeToLog('totalLiveCellcount:'+ this.totalLiveCellCount);
    this.totalDeadCellCount = this.deadCellCount.reduce(
      function(a,b) {
        return a+b;
      }
    )
    var totallivecells: number = (this.totalLiveCellCount)/(this.liveCellCount.length)*(1/parseInt(this.diluteRatio))*10000*(this.totalVolume);
    this.c10k = 10000 / totallivecells;
    this.c30k = 30000 / totallivecells;
    this.c50k = 50000 / totallivecells;
    this.c100k = 100000 / totallivecells;
    this.c200k = 200000 / totallivecells;
    this.c250k = 250000 / totallivecells;
    this.c500k = 500000 / totallivecells;
  }
}
