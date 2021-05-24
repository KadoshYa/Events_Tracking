import { IEvent } from './shared/event.model';
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'event-thumbnail',
    template:`
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">Time: {{event?.time}} &nbsp;
            <span *ngSwitchCase="'8:00 am'">Early Start</span>
            <span *ngSwitchDefault>Normal Start</span>
            <span *ngSwitchCase="'10:00 am'">Late Start</span>
        </div>
        <div>Price: \${{event.price}}</div>         
        <div [hidden]="!event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}</span>
            <span>{{event?.location?.country}}</span>
        </div> 
        <div [hidden]="!event?.online">Online: {{event.online}}</div>     
    </div>
    
    `,
    styles:[`
        .bold {font-weight: bold;}
        .green {color: #003300 !important;}
        .thumbnail {min-height:210px;}
        .pad-left {margin-left:10px}
        .well div {color: #bbb}`
    ]
})

export class EventThumbnailComponent{
    @Input()
    event!: IEvent;
    
    getStartTimeClass()
    {
        const isEarlyStart= this.event && this.event.time === '8:00 am'
        return {green: isEarlyStart, bold:isEarlyStart}
    }
}