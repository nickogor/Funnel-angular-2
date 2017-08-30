import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownComponent } from "./dropdown.component";



@ NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        DropdownComponent
    ],
    providers: [],
    bootstrap: [DropdownComponent]
})
export class DropDownModule { }
