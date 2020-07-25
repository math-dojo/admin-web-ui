import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { QuestionApprovalPageComponent } from './components/question-approval-page/question-approval-page.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ActionsComponent } from './components/actions/actions.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'login', component: LandingPageComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'actions/approve', component: QuestionApprovalPageComponent },
  { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },
  { path: '**', component: PagenotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
