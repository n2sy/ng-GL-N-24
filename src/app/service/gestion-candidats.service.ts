import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  link = 'http://localhost:3000/cv/persons';
  private allCands: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 55, 'designer', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 29, 'directeur', 'lisa.png'),
  ];
  constructor(private http: HttpClient) {}

  addNewCandidat(newCandidat) {
    newCandidat._id = this.allCands[this.allCands.length - 1]._id + 1;
    this.allCands.push(newCandidat);
  }

  addCandidat() {
    this.allCands.push(
      new Candidat(1, 'NEW', 'CANDIDAT', 23, 'ingénieur', 'bart.jpeg')
    );
  }
  addCandidatAPI(cand) {
    // let token = localStorage.getItem('accessToken');
    // if (token) {
    //   let h = new HttpHeaders().set('Authorization', `bearer ${token}`);
    //   return this.http.post(`${this.link}/`, cand, { headers: h });
    // }
    return this.http.post(`${this.link}/`, cand);
  }

  updateCandidat(uCand) {
    let i = this.allCands.findIndex((cand) => cand._id == uCand._id);
    this.allCands[i] = uCand;
  }

  updateCandidatAPI(uCand) {
    console.log(uCand);

    return this.http.put(`${this.link}/${uCand['_id']}`, uCand);
  }

  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  getCandidatById(id) {
    return this.allCands.find((cand) => cand._id == id);
  }
  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  getAllCandidats() {
    return this.allCands;
  }
  getAllCandidatsAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.link);
  }
  testerService() {
    console.log('Je suis le service angular');
  }
}
