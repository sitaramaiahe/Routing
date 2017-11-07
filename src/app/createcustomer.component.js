"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var createcustomercomponent = (function () {
    function createcustomercomponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    createcustomercomponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            entityName: this.formBuilder.control('', forms_1.Validators.required),
            EIN: this.formBuilder.control('', forms_1.Validators.required),
            classificationCode: this.formBuilder.control('', forms_1.Validators.required),
            formationZipCode: this.formBuilder.control('', forms_1.Validators.required),
            formationCountryCode: this.formBuilder.control('', forms_1.Validators.required),
            bussinessZIPCode: this.formBuilder.control('', forms_1.Validators.required),
            bussinessCountryCode: this.formBuilder.control('', forms_1.Validators.required),
        });
    };
    createcustomercomponent.prototype.save = function (value) {
        console.log(value);
    };
    return createcustomercomponent;
}());
createcustomercomponent = __decorate([
    core_1.Component({
        selector: 'create-customer-info',
        templateUrl: 'app/CreateCustomer.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router])
], createcustomercomponent);
exports.createcustomercomponent = createcustomercomponent;
//# sourceMappingURL=createcustomer.component.js.map