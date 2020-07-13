import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsStatusPageRoutingModule } from './events-status-routing.module';

import { EventsStatusPage } from './events-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsStatusPageRoutingModule
  ],
  declarations: [EventsStatusPage]
})
export class EventsStatusPageModule {}
