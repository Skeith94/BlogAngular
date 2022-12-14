import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent, NgbdDropdownManual } from './navbar/navbar.component';
import { MasterheadComponent } from './masterhead/masterhead.component';
import { PostpreviewComponent } from './postpreview/postpreview.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MasterheadComponent,
    PostpreviewComponent,
    HomeComponent,
    LoadingComponent,
    AuthComponent,
    RegistrazioneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
