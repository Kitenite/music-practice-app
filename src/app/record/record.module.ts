import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordRoutingModule } from './record-routing.module';
import { RecordComponent } from './components/record.component';


@NgModule({
  declarations: [RecordComponent],
  imports: [
    CommonModule,
    RecordRoutingModule
  ]
})
export class RecordModule { }
