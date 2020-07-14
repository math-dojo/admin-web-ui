import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionApprovalPageComponent } from './components/question-approval-page/question-approval-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ActionsComponent } from './components/actions/actions.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { KatexModule } from 'ng-katex';

@NgModule({
  declarations: [
    AppComponent,
    QuestionApprovalPageComponent,
    LandingPageComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    KatexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
