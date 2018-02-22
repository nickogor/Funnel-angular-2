import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ContactFormCompoent} from "./contact.form.component";



@ NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        ContactFormCompoent
    ],
    providers: [],
    bootstrap: [ContactFormCompoent]
})
export class ContactFormModule { }
