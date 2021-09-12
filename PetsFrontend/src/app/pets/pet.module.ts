import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchNameComponent } from './components/search-name/search-name.component';
import { SearchTypeComponent } from './components/search-type/search-type.component';
import { SearchTypeGenderComponent } from './components/search-type-gender/search-type-gender.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';



@NgModule({
  declarations: [
    CreateComponent,
    IndexComponent,
    SidebarComponent,
    SearchNameComponent,
    SearchTypeComponent,
    SearchTypeGenderComponent,
    SearchResultsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [
    CreateComponent,
    IndexComponent,
    SidebarComponent,
  ]
})
export class PetModule { }
