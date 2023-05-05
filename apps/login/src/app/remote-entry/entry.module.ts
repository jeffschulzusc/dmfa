import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
