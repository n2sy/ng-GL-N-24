import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../service/gestion-candidats.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  activateRoute = inject(ActivatedRoute);
  candSer = inject(GestionCandidatsService);
  router = inject(Router);
  candidateToUpdate: Candidat;

  ngOnInit() {
    this.candSer
      .getCandidatByIdAPI(this.activateRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (response: Candidat) => {
          this.candidateToUpdate = response;
        },
        error: (err) => {
          this.router.navigateByUrl('/not-found');
        },
      });
  }

  submitHandler(formValue) {
    formValue._id = this.candidateToUpdate._id;
    this.candSer.updateCandidatAPI(formValue).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
    });
  }
}
