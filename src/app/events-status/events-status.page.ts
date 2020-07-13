import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-status',
  templateUrl: './events-status.page.html',
  styleUrls: ['./events-status.page.scss'],
})
export class EventsStatusPage implements OnInit {

  status: string[];

  constructor() { 
    this.status = ['Public', 'Public', 'Public', 'Public', 'Public'];
  }

  changeStatus(index: number) {
    status = this.status[index];
    if (status == 'Public') {
      status = 'Private';
    } else {
      status = 'Public';
    }
    this.status[index] = status;
  }

  ngOnInit() {
  }

}
