import { Component, EventEmitter, Output } from '@angular/core';
import { Candidat } from '../../models/candidat';
import { GestionCandidatsService } from '../../service/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
  //providers: [GestionCandidatsService],
})
export class ListeComponent {
  allCandidats: Candidat[] = [];
  @Output() eventToCv = new EventEmitter();

  constructor(private candSer: GestionCandidatsService) {}

  ngOnInit() {
    this.allCandidats = this.candSer.getAllCandidats();
  }

  showCandidats() {
    console.log(this.candSer.getAllCandidats());
  }

  sendCandToCv(cand) {
    this.eventToCv.emit(cand);
  }
}
