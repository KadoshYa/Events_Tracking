import { EventService } from './../shared/event-sevice';
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()

export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventService, private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot){

       const eventExixts = !!this.eventService.getEvent(+route.params['id'])

       if(!eventExixts)
        this.router.navigate(['/404'])
    return eventExixts
        
    }
}