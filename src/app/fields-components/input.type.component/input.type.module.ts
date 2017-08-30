import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputTypeComponent } from "./input.type.component";



@ NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        InputTypeComponent
    ],
    providers: [],
    bootstrap: [InputTypeComponent]
})
export class InputTypeModule { }
