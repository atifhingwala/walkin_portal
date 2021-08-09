import { FormService } from 'src/app/form.service';
import { AuthGuardService } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { PreRequisiteComponent } from './events/event/pre-requisite/pre-requisite.component';
import { RoleComponent } from './events/event/role/role.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { HallTicketComponent } from './hall-ticket/hall-ticket.component';

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventComponent,
    PreRequisiteComponent,
    RoleComponent,
    HallTicketComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
    SharedModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains:["localhost:5001"],
        disallowedRoutes: [] 
      }
    })
  ],
  providers: [AuthGuardService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
