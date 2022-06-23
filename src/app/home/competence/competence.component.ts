import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  constructor() { }

  Level : number = 20 ;

  CompetenceADD: boolean = false;
  CompetenceEDIT: boolean = false;

  CompetenceADDfunction() {
    this.CompetenceADD = true;
  }
  CompetenceEDITfunction(){
    this.CompetenceEDIT = true;
  }

  ngOnInit() {
  }

}
