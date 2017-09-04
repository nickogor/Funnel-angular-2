import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { StartComponent } from './start-funnel.component';

@ NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    declarations: [
        StartComponent
    ],
    providers: [],
    bootstrap: [StartComponent]
})
export class StartModule { }
