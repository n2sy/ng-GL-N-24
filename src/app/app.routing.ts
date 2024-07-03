import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DirectComponent } from './direct/direct.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CvComponent } from './projet/cv/cv.component';
import { ServersComponent } from './servers/servers.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent },
      {
        path: ':id',
        children: [
          { path: '', component: InfosComponent },
          { path: 'edit', component: EditComponent },
        ],
      },
    ],
  },
  { path: 'direct', component: DirectComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const GL_N_ROUTING = RouterModule.forRoot(myRoutes);
