import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TunerComponent } from './components/tuner.component';

const routes: Routes = [{ path: '', component: TunerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TunerRoutingModule { }
