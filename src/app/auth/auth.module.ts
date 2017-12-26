import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';

// import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatIconModule
    ],
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    // providers: [ AuthService ]
})
export class AuthModule { }
