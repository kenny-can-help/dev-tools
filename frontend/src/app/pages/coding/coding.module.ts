import { NgModule } from '@angular/core';
import { Base64Component } from './base64/base64.component';
import { CodingRoutingModule } from './coding-routing.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import { CompressComponent } from './compress/compress.component';

@NgModule({
  declarations: [
    Base64Component,
    CompressComponent
  ],
  imports: [
    CodingRoutingModule, NzInputModule, FormsModule, CommonModule
  ]
})
export class CodingModule { }
