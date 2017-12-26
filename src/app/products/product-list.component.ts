import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Product, ProductService } from './product.service';
import { MatCheckboxModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products$: Observable<Product[]>;

    private selectedId: number;

    constructor(
        private service: ProductService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.products$ = this.route.paramMap
            .switchMap((params: ParamMap) => {
                this.selectedId = +params.get('id');
                return this.service.getProducts();
            })
    }
}

