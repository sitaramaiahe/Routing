"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var createcustomer_component_1 = require("./createcustomer.component");
var searchcustomer_component_1 = require("./searchcustomer.component");
var other_component_1 = require("./other.component");
var appRoutes = [
    { path: 'create', component: createcustomer_component_1.createcustomercomponent },
    { path: 'search', component: searchcustomer_component_1.searchcustomercomponent },
    { path: 'other', component: other_component_1.OtherComponent },
    { path: '', redirectTo: '/create', pathMatch: 'full' },
    { path: '**', component: other_component_1.OtherComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            createcustomer_component_1.createcustomercomponent,
            searchcustomer_component_1.searchcustomercomponent,
            other_component_1.OtherComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map