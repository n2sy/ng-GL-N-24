import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CustomDirDirective } from './custom-dir.directive';
import { DirectComponent } from './direct/direct.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortPipe } from './pipes/short.pipe';
import { CvComponent } from './projet/cv/cv.component';
import { DetailsComponent } from './projet/details/details.component';
import { ItemComponent } from './projet/item/item.component';
import { ListeComponent } from './projet/liste/liste.component';
import { RecruesComponent } from './recrues/recrues.component';
import { ServersComponent } from './servers/servers.component';
import { GL_N_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    DetailsComponent,
    ItemComponent,
    DirectComponent,
    ServersComponent,
    CustomDirDirective,
    ShortPipe,
    FilterPipe,
    RecruesComponent,
    HomeComponent,
    NavbarComponent,
    InfosComponent,
    AddComponent,
    EditComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule, GL_N_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
