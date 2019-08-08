import { MaterialModule } from './../../../../../libs/material/src/lib/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';


@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
