import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutLibraryComponent } from './about-library/about-library.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { RulesAndRegulationComponent } from './rules-and-regulation/rules-and-regulation.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutLibraryComponent},
  {path:'rules', component:RulesAndRegulationComponent},
  {path:'price-card', component:PriceCardComponent},
  {path:'signup', component:RegFormComponent},
  {path:'login', component:LoginFormComponent},
  {path:'search/:return', component:SearchComponent},
  {path:'search', component:SearchComponent},
  {path:'add-book', component:AddBookComponent, canActivate:[AuthGuard]},
  {path:'edit-book/:bookId', component:EditBookComponent, canActivate:[AuthGuard]},
  {path:"page-not-found", component:PageNotFoundComponent},
  {path:'**', redirectTo:'/page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
