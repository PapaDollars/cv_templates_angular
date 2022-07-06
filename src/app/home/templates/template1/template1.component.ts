import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/firebase.service';
@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})
export class Template1Component implements OnInit {
  langue!: any [];
  contacts!: any[];
  emails!: any[];
  info!: any [];
  loisir !: any [];
  formation !: any [];
  competemce  !: any[];
  certifcation !: any[];
  experience  !: any[];
  compte  !: any[];

  constructor(public cruds : FirebaseService) { }

  ngOnInit() {

    this.cruds.get_Contact().subscribe(data  =>{
      // console.log(data[0].mail);
      this.contacts =data;
      console.log(data) ;
    })

    this.cruds.get_AddresseMail().subscribe(data =>{
       this.emails = data;
       console.log(data);
      })

       this.cruds.get_user().subscribe(data  =>{
        // console.log(data[0].mail);
        this.info =data;
        console.log(data) ;
      })

      this.cruds.get_lamgues().subscribe(data  =>{
        // console.log(data[0].mail);
        this.langue =data;
        console.log(data) ;
      })

      this.cruds.get_loisirs().subscribe(data =>{
        this.loisir = data;
        console.log(data);
     })


     this.cruds.get_formation().subscribe(data  =>{
      // console.log(data[0].mail);
      this.formation =data;
      console.log(data) ;
    })

    this.cruds.get_competence().subscribe(data  =>{
      this.competemce =data;
      console.log(data) ;


    this.cruds.get_certification().subscribe(data  =>{
      this.certifcation =data;
      console.log(data) ;
    })
    })
    this.cruds.get_experience().subscribe(data  =>{
      this.experience =data;
      console.log(data) ;
    })

    this.cruds.get_compte().subscribe(data =>{
      this.compte = data;
      console.log(data);
   })

  }

}
