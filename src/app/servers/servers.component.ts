import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  selectedStatut = '';
  tabServers = [
    {
      name: 'Production server',
      type: 'small',
      date_d: new Date(2020, 4, 4),
      statut: 'stable',
    },
    {
      name: 'Development server',
      type: 'small',
      date_d: new Date(2022, 4, 4),
      statut: 'critical',
    },
    {
      name: 'Test Development server',
      type: 'medium',
      date_d: new Date(2020, 4, 4),
      statut: 'stable',
    },
    {
      name: 'Nidhal server',
      type: 'large',
      date_d: new Date(2020, 4, 4),
      statut: 'offline',
    },
  ];

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
