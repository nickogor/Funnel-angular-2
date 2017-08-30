import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DoubleRadioComponent } from "./doubleRadio.component";



@ NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        DoubleRadioComponent
    ],
    providers: [],
    bootstrap: [DoubleRadioComponent]
})
export class DoubleRadioModule { }
