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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormAComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let FormAComponent = class FormAComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnDestroy() {
    }
    ngOnInit() {
        this.aForm = this.fb.group({
            name: '',
        });
        this.aForm.valueChanges.subscribe(this.formValueChanged);
    }
    formValueChanged(formValue) { }
};
FormAComponent = __decorate([
    core_1.Component({
        selector: 'ngx-form-a',
        templateUrl: './form-a.component.html',
        styleUrls: ['./form-a.component.scss']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormAComponent);
exports.FormAComponent = FormAComponent;