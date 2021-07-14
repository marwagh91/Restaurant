import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { PlatsComponent } from './components/plats/plats.component';
import { AboutComponent } from './components/about/about.component';
import { TheBestComponent } from './components/the-best/the-best.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { CommentsComponent } from './components/comments/comments.component';
import { BlogComponent } from './components/blog/blog.component';
import { ChefComponent } from './components/chef/chef.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { AddPlatsComponent } from './components/add-plats/add-plats.component';
import { AdminComponent } from './components/admin/admin.component';
import { SearchComponent } from './components/search/search.component';
import { PlatComponent } from './components/plat/plat.component';
import { ChefAdminComponent } from './components/chef-admin/chef-admin.component';
import { PlatsDetailsComponent } from './components/plats-details/plats-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactAdminComponent } from './components/contact-admin/contact-admin.component';
import { PlatAdminComponent } from './components/plat-admin/plat-admin.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';
import { FiltrePipe } from './pipes/filtre.pipe';
import { AdminChefsComponent } from './components/admin-chefs/admin-chefs.component';
import { FavorisComponent } from './components/favoris/favoris.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PlatsComponent,
    AboutComponent,
    TheBestComponent,
    FoodMenuComponent,
    ChefsComponent,
    ReservationComponent,
    CommentsComponent,
    BlogComponent,
    ChefComponent,
    SignupComponent,
    LoginComponent,
    AddPlatsComponent,
    AdminComponent,
    SearchComponent,
    PlatComponent,
    ChefAdminComponent,
    PlatsDetailsComponent,
    ContactComponent,
    ContactAdminComponent,
    PlatAdminComponent,
    UserAdminComponent,
    FiltrePipe,
    AdminChefsComponent,
    FavorisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
