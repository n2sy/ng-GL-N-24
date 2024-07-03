import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private allCands: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 55, 'designer', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 29, 'directeur', 'lisa.png'),
  ];
  constructor() {}

  addCandidat() {
    this.allCands.push(
      new Candidat(1, 'NEW', 'CANDIDAT', 23, 'ingénieur', 'bart.jpeg')
    );
  }
  getCandidatById(id) {
    return this.allCands.find((cand) => cand.id == id);
  }

  getAllCandidats() {
    return this.allCands;
  }
  testerService() {
    console.log('Je suis le service angular');
  }
}
