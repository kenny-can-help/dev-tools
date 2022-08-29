import { NgModule } from '@angular/core';

import { SystemRoutingModule } from './system-routing.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { ComingSoonComponent } from './comming-soon/coming-soon.component';


@NgModule({
  imports: [SystemRoutingModule],
  declarations: [WelcomeComponent, ComingSoonComponent],
  exports: [WelcomeComponent,ComingSoonComponent]
})
export class SystemModule { }
