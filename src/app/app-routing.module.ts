import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyCoombesComponent } from './components/buy-coombes/buy-coombes.component';
import { BuyKeeveSetComponent } from './components/buy-keeve-set/buy-keeve-set.component';
import { BuyMomoComponent } from './components/buy-momo/buy-momo.component';
import { BuyNilleComponent } from './components/buy-nille/buy-nille.component';

const routes: Routes = [
  { path: 'coombes', component: BuyCoombesComponent },
  { path: 'momo', component: BuyMomoComponent },
  { path: 'nille', component: BuyNilleComponent },
  { path: 'keeveset', component: BuyKeeveSetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
