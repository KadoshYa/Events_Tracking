import { Error404Component } from './errors/404.component';
import { ToastService } from './common/toast-service';
import { NavBarComponent } from './nav/nav-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutes } from './routes';
import { EventsAppComponent } from './events_app.component';
import { RouterModule } from '@angular/router';

import { 
  EventListResolver, 
  EventRouteActivator, 
  CreateEventComponent,
  EventService, 
  EventThumbnailComponent, 
  EventsListComponent,
  EventDetailsComponent
} 
  from './events/index';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService, 
    ToastService, 
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent)
  {
    if(component.isDirty)
      return window.confirm('You have not saved this event, do you really ant to cancel?')
    return true  
  }
