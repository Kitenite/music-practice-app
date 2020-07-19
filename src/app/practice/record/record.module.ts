import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatButtonModule } from '@angular/material/button'

import { RecordRoutingModule } from './record-routing.module';
import { RecordComponent } from './components/record.component';


@NgModule({
  declarations: [RecordComponent],
  imports: [
    CommonModule,
    RecordRoutingModule,
    MatButtonModule
  ]
})
export class RecordModule { }
