import { Component } from '@angular/core';
import { Candidat } from '../../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 55, 'designer', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 29, 'directeur', 'lisa.png'),
  ];
  selectedCandidat: Candidat;

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
