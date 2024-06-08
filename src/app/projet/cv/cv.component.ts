import { Component, inject } from '@angular/core';
import { Candidat } from '../../models/candidat';
import { GestionCandidatsService } from '../../service/gestion-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  //providers: [GestionCandidatsService],
})
export class CvComponent {
  // implements OnInit inutile depuis v14
  tabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 55, 'designer', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 29, 'directeur', 'lisa.png'),
  ];
  selectedCandidat: Candidat;

  // Methode 1 injection de dépendances
  // constructor(private candSer: GestionCandidatsService) {}

  //Methode 2 ID
  candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.candSer.testerService();
  }

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
