import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/userssss').subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log("Erreur avec l'API", err);
      },
      complete: () => {
        console.log('Flux terminée !!');
      },
    });

    // DEPRECATED
    // this.http.get('https://jsonplaceholder.typicode.com/userssss').subscribe((data) => {
    //     console.log(data);
    //   },(err) => {
    //     console.log("Erreur avec l'API", err);
    //   }, () => {
    //     console.log('Flux terminée !!');
    //   },
    // );
  }

  goToServers() {
    this.router.navigateByUrl('/servers');
  }

  goToCv() {
    this.router.navigate(['cv']);
  }
}
