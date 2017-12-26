import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

import { ProductService } from './product.service';
import { ProductRoutingModule } from './products-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutingModule,
        MatButtonModule,
        MatCheckboxModule,
        MatGridListModule,
        MatTabsModule
    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent
    ],
    providers: [ ProductService ]
})

export class ProductsModule { }
