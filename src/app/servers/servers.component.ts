import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
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
      type: 'small',
      date_d: new Date(2020, 4, 4),
      statut: 'stable',
    },
    {
      name: 'Nidhal server',
      type: 'small',
      date_d: new Date(2020, 4, 4),
      statut: 'offline',
    },
  ];
}
