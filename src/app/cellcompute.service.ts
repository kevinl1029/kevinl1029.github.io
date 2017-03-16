import { Injectable } from '@angular/core';

@Injectable()
export class CellcomputeService {

  computeData = {
    diluteRatio: '',
    totalVolume: 0,
    liveCellCount: [],
    deadCellCount: [],
  };

  diluteRatioOptions = [
    '1/2',
    '1/4',
    '1/8',
    '1'
  ]

  constructor() { }

}
