import { Component, OnInit } from '@angular/core';
import { Item } from 'firebase/analytics';
import { MenuItem, MessageService, PrimeIcons } from 'primeng/api';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
  providers: [MessageService]
})
export class FormationComponent implements OnInit {

  constructor(private messageService: MessageService,public crud : FirebaseService) { }

  events1: any[] = [];

  FormationADD: boolean = false;
  FormationEDIT : boolean =false;

  FormationADDfunction() {
    this.FormationADD = true;
  }
  formationEDITfunction() {
    this.FormationEDIT = true;
  }

  ngOnInit() {

    //TimeLine
    this.events1 = [
      { diploma: 'Diploma_1', date: '15/10/2020', school: 'College Moderne', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0' },
      { diploma: 'Diploma_2', date: '15/10/2020', school: 'Lycee Bilingue', icon: PrimeIcons.COG, color: '#673AB7' },
    ];
     
    // this.cruds.get_user().subscribe(data  =>{
    //   // console.log(data[0].mail);
    //   this.info =data;
    //   console.log(data) ;
    // })

  }

  setformation(diplome : string, ecole : string , period : string , catego : string)
  {
   
    let Record = {
      
      'diplome':diplome,
      'ecole':ecole,
      'periode':period,
      'categorie': catego,
      'mail' : ''
    }

    this.crud.create_formation(Record).then(res =>{
      console.log(res);
      alert("formation ajouter ");
    }).catch(error =>{
      console.log(error);
    });
  }

  updateFormation(diplome : string, ecole : string , period : string , catego : string)
  {
     
  }

  DeleteFormation(Record : any)
  {
     this.crud.deleteformation(Record);
  }

}
