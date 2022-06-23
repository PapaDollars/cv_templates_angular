import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
  providers: [MessageService]
})
export class FormationComponent implements OnInit {
  constructor(private messageService: MessageService) { }


  leftTooltipItems!: MenuItem[];

  ngOnInit() {

    this.leftTooltipItems = [
      {
        tooltipOptions: {
          tooltipLabel: "Edit",
          tooltipPosition: "left",
        },
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        tooltipOptions: {
          tooltipLabel: "Update",
          tooltipPosition: "left",
        },
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        tooltipOptions: {
          tooltipLabel: "Delete",
          tooltipPosition: "left",
        },
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
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
        }
      }
    ];

  }

}
