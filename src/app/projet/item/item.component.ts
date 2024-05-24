import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() oneCandidat: Candidat;
  @Output() eventToListe = new EventEmitter();

  sendCandToListe() {
    this.eventToListe.emit(this.oneCandidat);
  }
}
