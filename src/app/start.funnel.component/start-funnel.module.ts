import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StartComponent } from './start-funnel.component';

@ NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        StartComponent
    ],
    providers: [],
    bootstrap: [StartComponent]
})
export class StartModule { }
