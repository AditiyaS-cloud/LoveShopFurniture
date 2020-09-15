import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BuyCoombesComponent } from './components/buy-coombes/buy-coombes.component';
import { BuyMomoComponent } from './components/buy-momo/buy-momo.component';
import { BuyKeeveSetComponent } from './components/buy-keeve-set/buy-keeve-set.component';
import { BuyNilleComponent } from './components/buy-nille/buy-nille.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyCoombesComponent,
    BuyMomoComponent,
    BuyKeeveSetComponent,
    BuyNilleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
