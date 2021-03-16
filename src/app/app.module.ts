import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { CampsiteComponent } from './campsite/campsite.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AboutComponent } from './about/about.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AddSuppliesComponent } from './add-supplies/add-supplies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchCriteriaComponent,
    CampsiteComponent,
    SuppliesComponent,
    RecipesComponent,
    AboutComponent,
    FourOhFourComponent,
    AddSuppliesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
