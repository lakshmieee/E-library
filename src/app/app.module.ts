import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutLibraryComponent } from './about-library/about-library.component';
import { RulesAndRegulationComponent } from './rules-and-regulation/rules-and-regulation.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SearchComponent } from './search/search.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookListService } from './book-list.service';
import { AuthGuard } from './auth.guard';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutLibraryComponent,
    RulesAndRegulationComponent,
    PriceCardComponent,
    RegFormComponent,
    LoginFormComponent,
    SearchComponent,
    AddBookComponent,
    EditBookComponent,
    PageNotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BookListService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
