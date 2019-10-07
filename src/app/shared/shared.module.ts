import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';



const MODULES = [CommonModule];

const DECLARATIONS = [];
const EXPORT_COMPONENTS = [];
const ENTRYCOMPONENTS = [];

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
