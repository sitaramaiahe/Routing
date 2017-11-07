import { Component, Inject } from '@angular/core';

@Component({
    template:`<div><h1>HELLO {{name}}</h1></div>`
})
export class OtherComponent {

    name: string = "Sitaramaiah";
}