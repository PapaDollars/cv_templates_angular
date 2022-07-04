import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realization',
  templateUrl: './realization.component.html',
  styleUrls: ['./realization.component.scss']
})
export class RealizationComponent implements OnInit {

  constructor() { }


  events1: any[] = [];

  RealizationADD: boolean = false;

  RealizationADDfunction() {
    this.RealizationADD = true;
  }

  ngOnInit() {
  }

}
