import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  section: string = 'GL-2-Nxy';
  annee: number = 2025;
  cl: string = 'pink';
  hd: boolean = false;

  traitement() {
    alert("J'ai été cliqué");
  }

  lireMessage(msg: string) {
    this.section = msg;
  }
}
