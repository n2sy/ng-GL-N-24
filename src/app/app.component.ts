import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'GL-N-24';

  lireMessage2(msg: string) {
    alert(msg);
  }
}
