import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataTypeInterface} from "../data-type-interface";

@Component({
    selector: 'address-input',
    templateUrl: './address.html'
})
export class AddressComponent {
    @Input() questionData: DataTypeInterface;
    didClick : boolean = false;
    coords: any;
    inVal: string ='';
    geoCodingData: any;
    success: boolean = false;


    constructor(private http: HttpClient){

    }


    ngOnInit( ) {
        if (!!navigator.geolocation) {
            // Support
            let geo = navigator.geolocation;
            geo.getCurrentPosition(position => {
                this.coords = position.coords;
                let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.coords.latitude+','+this.coords.longitude+'&key=AIzaSyBsPwQSMMupxRukhijpwlgt782u7ZNXmZo&language=en';
                this.http.get(url).subscribe(data => {
                    this.SetAddress(data)
                });
            });

        } else {
            // No support
            console.log('No support');
        }

    }
    SetAddress(data:any):void{
        if(data.error_message){
            console.log(data.error_message);
            this.UpdateValue('');
        }else if (data.results.length > 0){
            this.geoCodingData = data.results[0];
            this.UpdateValue(this.geoCodingData.formatted_address);
        }
    }

    UpdateValue(val){
        this.inVal = val;
        this.CheckValid(val);
    }

    ClickHandle(e){
        if(!this.didClick){
            this.didClick = true;
            e.target.setSelectionRange(0, e.target.value.length)
        }
        this.CheckValid(e.target.value);
    }

    getAddress(event){
        this.CheckValid(event.formatted_address)
    }


    CheckValid(val){
        if(val.length > 5){
            let url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+val+'=&key=AIzaSyBsPwQSMMupxRukhijpwlgt782u7ZNXmZo&language=en';
            this.http.get(url).subscribe(data => {
                let res:any = data;
                this.success = res.status == "OK";
            });
        }else {
            this.success = false
        }
    }

}
