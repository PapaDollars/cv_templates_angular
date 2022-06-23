import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { AboutUSComponent } from './home/aboutUS/aboutUS.component';
import { CompetenceComponent } from './home/competence/competence.component';
import { CompteComponent } from './home/compte/compte.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { FormationComponent } from './home/formation/formation.component';
import { InformationComponent } from './home/information/information.component';
import { LanguageComponent } from './home/language/language.component';
import { LeisureComponent } from './home/leisure/leisure.component';
import { TemplatesComponent } from './home/templates/templates.component';
import { ViewCVComponent } from './home/viewCV/viewCV.component';

const routes: Routes = [

{path: '', component:InformationComponent},
{path: 'competence', component:CompetenceComponent},
{path: 'compte', component:CompteComponent},
{path: 'experience', component:ExperienceComponent},
{path: 'formation', component:FormationComponent},
{path: 'language', component:LanguageComponent},
{path: 'leisure', component:LeisureComponent},
{path: 'viewCV', component:ViewCVComponent},
{path: 'templates', component:TemplatesComponent},
{path: 'aboutUS', component:AboutUSComponent},
{path: 'connection', component:ConnectionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
