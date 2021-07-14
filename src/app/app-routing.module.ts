import { ContentChild, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AddPlatsComponent } from './components/add-plats/add-plats.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { SearchComponent } from './components/search/search.component';
import { PlatComponent } from './components/plat/plat.component';
import { PlatsComponent } from './components/plats/plats.component';
import { ChefAdminComponent } from './components/chef-admin/chef-admin.component';
// import { PlatsDetailsComponent } from './components/plats-details/plats-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { FavorisComponent } from './components/favoris/favoris.component';
import { PlatsDetailsComponent } from './components/plats-details/plats-details.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'signupAdmin',component:SignupComponent},
  {path:'signupChef',component:SignupComponent},
  {path:'add-plats',component:AddPlatsComponent},
  {path:'admin',component:AdminComponent},
  {path:'chefs',component:ChefsComponent},

  
  {path:'food_menu',component:FoodMenuComponent},
  {path:'search',component:SearchComponent},
  {path:'plat',component:PlatComponent},
  {path:'plats',component:PlatsComponent},
  {path:'plats-details/:id',component:PlatsDetailsComponent},


  {path:'chef-admin',component:ChefAdminComponent},
  // {path:'plats-details/:id',component:PlatsDetailsComponent},
  {path:'edit-plat/:id',component:AddPlatsComponent},
  {path:'contact',component:ContactComponent},
  {path:'favoris',component:FavorisComponent},














  {path:'login',component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
