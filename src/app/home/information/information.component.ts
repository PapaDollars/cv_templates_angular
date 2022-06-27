import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  providers: [MessageService]
})
export class InformationComponent implements OnInit {


  constructor(private messageService: MessageService) { }

  // Start PopPup Dialog
  InformationEDIT: boolean = false;
  OccupationADD: boolean = false;
  OccupationEDIT: boolean = false;
  ContactADD: boolean = false;
  ContactEDIT: boolean = false;
  EmailADD: boolean = false;
  EmailEDIT: boolean = false;
  DescriptionADD: boolean = false;
  DescriptionEDIT: boolean = false;
  // end PopPup Dialog

  // Button plus
  TooltipIformation!: MenuItem[];
  TooltipDescription!: MenuItem[];


  // start Occupation Button plus
  OccupationADDfunction() {
    this.OccupationADD = true;
  }
  OccupationEDITfunction() {
    this.OccupationEDIT = true;
  }

  // start Contact Button plus
  ContactADDfunction() {
    this.ContactADD = true;
  }
  ContactEDITfunction() {
    this.ContactEDIT = true;
  }

  // start Email Button plus
  EmailADDfunction() {
    this.EmailADD = true;
  }
  EmailEDITfunction() {
    this.EmailEDIT = true;
  }


  ngOnInit() {

    // start information Button plus
    this.TooltipIformation = [
      {
        tooltipOptions: {
          tooltipLabel: "Edit",
          tooltipPosition: "left",
        },
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          this.InformationEDIT = true;
        }
      }
    ];
    // end information Button plus

    // start Description Button plus
    this.TooltipDescription = [
      {
        tooltipOptions: {
          tooltipLabel: "Edit",
          tooltipPosition: "left",
        },
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          this.DescriptionEDIT = true;
        }
      },
      {
        tooltipOptions: {
          tooltipLabel: "Add",
          tooltipPosition: "left",
        },
        icon: 'pi pi-plus',
        command: () => {
          this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
          this.DescriptionADD = true;
        }
      }
    ];
    // end DescriptionADD Button plus

  }

}
