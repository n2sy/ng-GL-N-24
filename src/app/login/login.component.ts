import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defaultLanguage = 'js';
  myComment = "Cours d'Angular...";
  onSubmit(f) {
    console.log(f.value);
  }
}
