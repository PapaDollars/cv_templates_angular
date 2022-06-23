import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  constructor() { }

  AccountADD: boolean = false;
  AccountEDIT: boolean = false;

  AccountADDfunction() {
    this.AccountADD = true;
  }
  AccountEDITfunction(){
    this.AccountEDIT = true;
  }

  ngOnInit() {
  }

}
