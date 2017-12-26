import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Product, ProductService } from './product.service';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    product$: Observable<Product>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProductService
    ) {}

    ngOnInit() {
        this.product$ = this.route.paramMap
            .switchMap((params: ParamMap) => this.service.getProduct(params.get('id')));
    }

}