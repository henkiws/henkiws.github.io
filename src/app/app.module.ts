import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpConfigInterceptor } from './modules/core/interceptor/httpconfig.interceptor';
import { ErrorDialogComponent } from './modules/shared/error-dialog/error-dialog.component';
import { MainComponent } from './modules/public/layout/main/main.component';
import { HeaderComponent } from './modules/public/layout/header/header.component';
import { FooterComponent } from './modules/public/layout/footer/footer.component';
import { NotfoundComponent } from './modules/public/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorDialogComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpConfigInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorDialogComponent]
})
export class AppModule { }
