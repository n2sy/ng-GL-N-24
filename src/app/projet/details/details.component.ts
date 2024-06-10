import { Component, Input } from '@angular/core';
import { Candidat } from '../../models/candidat';
import { GestionRecruesService } from '../../service/gestion-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCandidat: Candidat;
  constructor(private recSer: GestionRecruesService) {}

  addNewRecrue() {
    this.recSer.addRecrue(this.selCandidat);
  }
}
