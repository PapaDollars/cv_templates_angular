import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './home/information/information.component';
import { ConnectionComponent } from './connection/connection.component';
import { FormationComponent } from './home/formation/formation.component';
import { TemplatesComponent } from './home/templates/templates.component';
import { AboutUSComponent } from './home/aboutUS/aboutUS.component';
import { CertificateComponent } from './home/Certificate/Certificate.component';
import { CompetenceComponent } from './home/competence/competence.component';
import { CompteComponent } from './home/compte/compte.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { LanguageComponent } from './home/language/language.component';
import { LeisureComponent } from './home/leisure/leisure.component';
import { ViewCVComponent } from './home/viewCV/viewCV.component';
import { Template1Component } from './home/templates/template1/template1.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import {AccordionModule} from 'primeng/accordion';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';
import {SpeedDialModule} from 'primeng/speeddial';
import { SidebarModule} from 'ng-sidebar';
import {FieldsetModule} from 'primeng/fieldset';
import {DialogModule} from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TimelineModule} from 'primeng/timeline';
import {SliderModule} from 'primeng/slider';
import {ImageModule} from 'primeng/image';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FirebaseService } from './firebase.service';
import { NgModel } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      ConnectionComponent,
      InformationComponent,
      FormationComponent,
      AboutUSComponent,
      CompetenceComponent,
      CompteComponent,
      ExperienceComponent,
      LanguageComponent,
      LeisureComponent,
      TemplatesComponent,
      ViewCVComponent,
      Template1Component,
      CertificateComponent,

   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    MenuModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    PanelModule,
    TabViewModule,
    SidebarModule,
    SpeedDialModule,
    FieldsetModule,
    DialogModule,
    InputTextareaModule,
    TimelineModule,
    SliderModule,
    ImageModule,
    FileUploadModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFirestoreModule,
    NgxPrintModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
