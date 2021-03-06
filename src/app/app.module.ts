import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputPageComponent } from './pages/inputpage/inputpage.component';
import { DownloadPageComponent } from './pages/downloadpage/downloadpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CertificateService } from './pages/services/certificate.service';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputPageComponent,
    DownloadPageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CertificateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
