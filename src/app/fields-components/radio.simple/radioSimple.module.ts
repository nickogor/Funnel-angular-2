import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RadioSimpleComponent } from "./radioSimple.component";



@ NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        RadioSimpleComponent
    ],
    providers: [],
    bootstrap: [RadioSimpleComponent]
})
export class RadioSimpleModule { }
