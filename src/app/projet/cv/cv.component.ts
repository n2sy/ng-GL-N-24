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
  tabCandidats: Candidat[] = [];
  selectedCandidat: Candidat;

  // Methode 1 injection de dépendances
  // constructor(private candSer: GestionCandidatsService) {}

  //Methode 2 ID
  candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.candSer.testerService();
    this.tabCandidats = this.candSer.getAllCandidats();
  }

  addnewCandidat() {
    this.candSer.addCandidat();
  }

  showCandidats() {
    console.log(this.candSer.getAllCandidats());
  }

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
