import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
  


@Component({
    templateUrl: './signup.component.html',
    styleUrls: [ './signup.component.css' ]
})
export class SignupComponent implements OnInit {
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    hide = true;

    constructor(
        // private service: AuthService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        console.log('signup page successfully loaded');
        
    }
}
