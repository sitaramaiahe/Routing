import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { createcustomercomponent } from './createcustomer.component';
import { searchcustomercomponent } from './searchcustomer.component';
import { OtherComponent } from './other.component';


const appRoutes: Routes = [   
    { path: 'create', component: createcustomercomponent },  
    { path: 'search', component: searchcustomercomponent },
    { path: 'other', component: OtherComponent },
    { path: '', redirectTo: '/create', pathMatch: 'full' },
    { path: '**', component: OtherComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule, RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        createcustomercomponent,
        searchcustomercomponent,
        OtherComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }