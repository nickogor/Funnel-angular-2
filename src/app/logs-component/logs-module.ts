import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LogsComponent } from "./logs-component";



@ NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        LogsComponent
    ],
    providers: [],
    bootstrap: [LogsComponent]
})
export class LogsModule { }
