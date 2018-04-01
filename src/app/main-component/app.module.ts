import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppMainComponent} from './app.component';

import { ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';

@ NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        AppMainComponent
    ],
    providers: [],
    bootstrap: [AppMainComponent],
})
export class AppMainModule { }
