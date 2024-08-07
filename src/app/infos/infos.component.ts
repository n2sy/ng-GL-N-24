import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionCandidatsService } from '../service/gestion-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  myId;
  candidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private candSer: GestionCandidatsService
  ) {}

  ngOnInit() {
    // 1ere méthode
    //console.log(this.activatedRoute.snapshot.params);
    //this.myId = this.activatedRoute.snapshot.params['id'];
    // this.myId = this.activatedRoute.snapshot.paramMap.get('id');

    //2eme methode (observable)
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response) => {
            this.candidat = response;
          },
          error: (err) => {
            this.router.navigateByUrl('/not-found');
          },
        });
      },
    });
  }

  onDelete() {
    if (confirm('Etes vous sur de vouloir supprimer ce candidat?')) {
      this.candSer.deleteCandidatAPI(this.candidat['_id']).subscribe({
        next: (response) => {
          alert(response['message']);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
