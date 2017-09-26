import { Component } from '@angular/core';
import {Http} from '@angular/http'; 
import 'rxjs/add/operator/map'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    spaceScreens: Array<any>;


    constructor(private http:Http) {
        this.http.get('assets/data.json')
        .map(response => response.json().screenshots)
        .subscribe(res => this.spaceScreens = res);
    }
}
