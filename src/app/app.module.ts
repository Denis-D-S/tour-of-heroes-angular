import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { MessagesComponent } from './messages/messages.component';
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTooltipModule} from "@angular/material/tooltip";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from "@angular/material/card";
import {MemeTestComponent} from "./meme-test/meme-test.component";
import {LampTestComponent} from "./lamp-test/lamp-test.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {EventBindingTest} from "./event-binding-test/event-binding-test";
import {TwoWayDataBindingComponent} from "./two-way-data-binding/two-way-data-binding.component";
import {MatInputModule} from "@angular/material/input";
import {DataBindingSecondTestComponent} from "./data-binding-second-test/data-binding-second-test.component";
import {FormGroupParentChildComponent} from "./form-group-parent-child/form-group-parent-child.component";

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
        MemeTestComponent,
        LampTestComponent,
        EventBindingTest,
        TwoWayDataBindingComponent,
        DataBindingSecondTestComponent,
        FormGroupParentChildComponent
    ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
