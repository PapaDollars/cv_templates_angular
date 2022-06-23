import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  constructor() { }

  Level : number = 20 ;

  LanguageADD: boolean = false;
  LanguageEDIT: boolean = false;

  LanguageADDfunction() {
    this.LanguageADD = true;
  }
  LanguageEDITfunction(){
    this.LanguageEDIT = true;
  }

  ngOnInit() {
  }

}
