import { HallTicketComponent } from './hall-ticket/hall-ticket.component';
import { AuthGuardService } from './auth-guard.service';
import { ReviewComponent } from './authentication/register/review/review.component';
import { QualificationComponent } from './authentication/register/qualification/qualification.component';
import { PersonalComponent } from './authentication/register/personal/personal.component';
import { LoginComponent } from './authentication/login/login.component';
import { EventsComponent } from './events/events.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './events/event/event.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './authentication/register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'/events', pathMatch: "full"},
  {path: "events", component: EventsComponent},
  {path: "events/:id", component: EventComponent, canActivate: [AuthGuardService]},
  {path: "login", component: LoginComponent},
  { path: "success", component: HallTicketComponent},
  {path: "register", component: RegisterComponent, children: [
    {path: "personal", component: PersonalComponent},
    {path: "qualification", component: QualificationComponent},
    {path: "review", component: ReviewComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
