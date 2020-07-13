import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsStatusPage } from './events-status.page';

const routes: Routes = [
  {
    path: '',
    component: EventsStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsStatusPageRoutingModule {}
