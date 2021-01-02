import { AtletaDeleteComponent } from './components/atleta/atleta-delete/atleta-delete.component';
import { AtletaUpdateComponent } from './components/atleta/atleta-update/atleta-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { AtletaCrudComponent } from "./views/atleta-crud/atleta-crud.component";
import { AtletaCreateComponent } from './components/atleta/atleta-create/atleta-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "atletas",
    component: AtletaCrudComponent
  },
  {
    path: "atletas/create",
    component: AtletaCreateComponent

  },
  {
    path: "atletas/update/:id",
    component: AtletaUpdateComponent
  },
  {
    path: "atletas/delete/:id",
    component: AtletaDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
