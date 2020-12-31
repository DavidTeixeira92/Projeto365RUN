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

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
