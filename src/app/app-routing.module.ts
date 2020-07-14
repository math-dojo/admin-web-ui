import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { QuestionApprovalPageComponent } from './components/question-approval-page/question-approval-page.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ActionsComponent } from './components/actions/actions.component';


const routes: Routes = [

  { path: 'actions', component: ActionsComponent },
  { path: 'actions/approve', component: QuestionApprovalPageComponent },
  { path: '', component: LandingPageComponent },
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
