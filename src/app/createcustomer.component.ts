import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'create-customer-info',
    templateUrl: 'app/CreateCustomer.component.html'
    //styleUrls: ['app/mSearchCustomer.css']
})
export class createcustomercomponent {

    form: any;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            entityName: this.formBuilder.control('', Validators.required),
            EIN:this.formBuilder.control ('', Validators.required),
            classificationCode:this.formBuilder.control ('', Validators.required),
            formationZipCode: this.formBuilder.control('', Validators.required),
            formationCountryCode: this.formBuilder.control('', Validators.required),
            bussinessZIPCode: this.formBuilder.control('', Validators.required),
            bussinessCountryCode: this.formBuilder.control('', Validators.required),
        });
    }

    save(value: Object): void {
        console.log(value);
    }
}