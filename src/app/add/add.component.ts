import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GestionCandidatsService } from '../service/gestion-candidats.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  candSer = inject(GestionCandidatsService);
  router = inject(Router);
  http = inject(HttpClient);
  submitHandler(e, formValue) {
    console.log(e.target[4].files[0]);
    let formData = new FormData();
    formData.append('avatar', e.target[4].files[0]);
    this.http.post('http://localhost:3000/images/upload', formData).subscribe({
      next: (response: any) => {
        formValue.avatar = response.fileName;
        this.candSer.addCandidatAPI(formValue).subscribe({
          next: (response: any) => {
            alert(response.message);
            this.router.navigateByUrl('/cv');
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });

    // console.log(formValue);
    // this.candSer.addNewCandidat(formValue);
    // this.router.navigateByUrl('/cv');
  }
}
