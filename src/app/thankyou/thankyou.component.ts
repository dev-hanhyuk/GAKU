import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product, ProductService } from '../products/product.service';


@Component({
    templateUrl: './thankyou.component.html',
    styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
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