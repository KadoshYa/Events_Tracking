import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../common/toast-service';
import { EventService } from './shared/event-sevice';
import { Component, OnInit } from '@angular/core'



@Component({
    selector: 'events-list',
    template: `
    <div class="row">
    <h1>Upcoming Events!</h1>         
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"> </event-thumbnail>   
      </div>   
    </div>
    `
})

export class EventsListComponent {
  events:any[] = []
   
  constructor(private eventService: EventService,private toastr: ToastService, private route:ActivatedRoute )
  {

  }
  
 
  ngOnInit()
  {
  this.events = this.route.snapshot.data['events']
  }
  
  handleThumbnailClick(eventName: string)
  {
    this.toastr.success("hello",eventName)
    
  }
  
}
 