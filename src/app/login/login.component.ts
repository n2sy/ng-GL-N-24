import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defaultLanguage = 'js';
  myComment = "Cours d'Angular...";
  showErrorMsg = false;
  authSer = inject(AuthService);
  router = inject(Router);
  onSubmit(f) {
    console.log(f.value);
    this.authSer.seConnecter(f.value).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('accessToken', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
        this.showErrorMsg = true;
        f.reset();
      },
    });
  }
}
