import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddSuppliesComponent } from './add-supplies/add-supplies.component';
import { CampgroundWatchlistComponent } from './campground-watchlist/campground-watchlist.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SuppliesComponent } from './supplies/supplies.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'supplies', component: SuppliesComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'add-supplies', component: AddSuppliesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'campground-watchlist', component: CampgroundWatchlistComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: FourOhFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
