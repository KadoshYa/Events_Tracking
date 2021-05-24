import { IEvent } from './../shared/event.model';
import { EventService } from './../shared/event-sevice';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container{padding-right:20px; padding-left;}
        .event-image {height:100px;}
    `]
})

export class EventDetailsComponent{
    event:any
    
    constructor (private eventService:EventService, private route:ActivatedRoute)
    {

    
    }

    ngOnInit(): void {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
     
    }
}