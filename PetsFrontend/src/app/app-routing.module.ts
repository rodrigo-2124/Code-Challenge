import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pets/components/index/index.component';
import { CreateComponent } from './pets/components/create/create.component';
import { SearchNameComponent } from './pets/components/search-name/search-name.component';
import { SearchTypeComponent } from './pets/components/search-type/search-type.component';
import { SearchTypeGenderComponent } from './pets/components/search-type-gender/search-type-gender.component';

const routes: Routes = [
  {
    path: '', 
    component: IndexComponent, 
    pathMatch: 'full'
  },
  {
    path: 'index', 
    component: IndexComponent
  },
  {
    path: 'create', 
    component: CreateComponent
  },
  {
    path: 'search/name', 
    component: SearchNameComponent
  },
  {
    path: 'search/type',  
    component: SearchTypeComponent
  },
  {
    path: 'search/type-gender', 
    component: SearchTypeGenderComponent
  },
  {
    path: '**', 
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
