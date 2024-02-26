import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './src/shared/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './src/shared/footer/footer.component';
import { CardComponent } from './src/shared/card/card.component';
import { BannerComponent } from './src/shared/banner/banner.component';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from './src/shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { CardBuscaComponent } from './src/shared/card-busca/card-busca.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    BannerComponent,
    ContainerComponent,
    HomeComponent,
    CardBuscaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
