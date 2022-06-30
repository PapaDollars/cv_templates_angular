import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  constructor(public cruds : FirebaseService) { }

  Level : number = 20 ;

  LanguageADD: boolean = false;
  LanguageEDIT: boolean = false;

  LanguageADDfunction() {
    this.LanguageADD = true;
  }
  idlangue !: any;
  nom !: any;
  niveaus !: any;
  LanguageEDITfunction(langue : any){
    this.LanguageEDIT = true;
    this.idlangue = langue.id;
    this.nom = langue.nom;
    this.niveaus = langue.niveau;
  }
  langue !: any[];
  ngOnInit() {
    this.cruds.get_lamgues().subscribe(data  =>{
      // console.log(data[0].mail);
      this.langue =data;
      console.log(data) ;
    })
  }

  setlangues(nom:any ,level : any)
  {
    let Record = {
      'nom' : nom,
      'niveau' :level,
      'mail' : ''
    }
     
    this.cruds.create_langue(Record).then(res =>{
      console.log(res);
      alert("Langue ajouter ");
    }).catch(error =>{
      console.log(error);
    });

  }

  DeleteLangue(langues : any)
  {
    this.cruds.deleteLangues(langues.id);
  }

  updatelangue(nom : any, niveau : any)
  {
    let Record = {
      'id' : this.idlangue,
      'nom' : nom,
      'niveau' : niveau
    }

    this.cruds.updateLangue(Record);
  }

}
