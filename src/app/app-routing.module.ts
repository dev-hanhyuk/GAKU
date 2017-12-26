import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const appRoutes: Routes = [
    { path: 'thankyou/:id', component: ThankyouComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes, { enableTracing: true }
        )
    ],
    exports: [ RouterModule ]
})



export class AppRoutingModule { }