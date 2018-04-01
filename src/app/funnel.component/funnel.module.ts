import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { FunnelComponent } from "./funnel.component";


@ NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,

    ],
    declarations: [
        FunnelComponent
    ],
    providers: [],
    bootstrap: [FunnelComponent]
})
export class FunnelModule { }
