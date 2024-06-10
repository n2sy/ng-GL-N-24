import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionRecruesService } from '../service/gestion-recrues.service';

@Component({
  selector: 'app-recrues',
  templateUrl: './recrues.component.html',
  styleUrl: './recrues.component.css',
})
export class RecruesComponent {
  tabRecrues: Candidat[] = [];
  constructor(private recSer: GestionRecruesService) {}
  ngOnInit() {
    this.tabRecrues = this.recSer.tabRecrues;
  }
}
