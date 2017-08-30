import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NumberClickComponent } from "./numberClick.component";



@ NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        NumberClickComponent
    ],
    providers: [],
    bootstrap: [NumberClickComponent]
})
export class NumberClickModule { }
