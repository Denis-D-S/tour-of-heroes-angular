import { NgModule } from '@angular/core';
import {HeroesComponent} from "../heroes.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModuleModule { }
