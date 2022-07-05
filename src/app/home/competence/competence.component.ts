import { Component, OnInit } from '@angular/core';
import { Item } from 'firebase/analytics';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  constructor(public crud : FirebaseService) { }

  CompetenceADD: boolean = false;
  CompetenceEDIT: boolean = false;

  CompetenceADDfunction() {
    this.CompetenceADD = true;
  }

  idcompetence !: string;
  titre_ !: string;
  niveau_ !: string;
  cat_ !: string;
  CompetenceEDITfunction(event : any){
    this.CompetenceEDIT = true;
    this.titre_ = event.titre;
    this.niveau_ = event.niveau;
    this.cat_ = event.categorie;
    this.idcompetence = event.id;
  }
   competemce !: any[];
  ngOnInit() {
    this.crud.get_competence().subscribe(data  =>{
      this.competemce =data;
      console.log(data) ;
    })
  }

  setcompetence(titre : string , niveau : string, cat : string)
  {
    let Record = {
      'titre' : titre,
      'niveau' : <number><any>niveau,
      'categorie' : cat,
      'mail' : ''
    }
    this.crud.create_competence(Record).then(res =>{
      console.log(res);
      console.log("Competence ajouter ");
    }).catch(error =>{
      console.log(error);
    });

  }

  DeleteCompetence(competemceid : Item)
  {
    this.crud.deleteeCompetence(competemceid);
  }

  updateCompetence(titre : string , niveau : string,cat : string)
  {
    let Record = {
       'id' : this.idcompetence,
       'titre' : titre,
      'niveau' : <number><any>niveau,
      'categorie' : cat,
    }
    this.crud.updateCompetence(Record);
  }



}
