import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Product {
    constructor(
        public id: number, 
        public name: string,
        public price: number,
        public abv: number,
        public category: string,
        public origin: string,
        public description: string,
        public image_url: string
    ) {}
}

const PRODUCTS = [
    new Product(10011, 'Bluemoon', 6.99, 5.4, 'Belgian White', 'USA', `Keith Villa wanted to craft a beer inspired by the flavorful Belgian Wits he enjoyed while studying brewing in Belgium. He brewed his interpretation using Valencia orange peel versus the traditional tart Curaçao orange peel, for a subtle sweetness, and added a touch of coriander to provide balance. Its natural unfiltered appearance adds to the depth of flavors in Belgian White`, '../assets/bluemoon.png'),
    new Product(10012, 'Cass', 2.50, 4.5, 'Golden Pale Lager', 'Korea',  `Non-alcoholic look-alikes of Cass can be found with brand names such as "Cars" and "Cdss". Some norae-bang (song bars) establishments have been known to try and pass off these imitations as the real thing, as Korean law prohibits noraebangs marked as such from selling alcoholic drinks within its premises (as opposed to noraejujeom establishments which are allowed to sell alcohol).`, '../assets/cass.png'),
    new Product(10013, 'Charm Soju', 2.99, 16.9, 'Soju', 'Korea', `This is a highly popular alcoholic drink in South Korea, and it is usually made with potatoes. An interesting fact is that Koreans have very strict rules of etiquette when it comes to drinking soju. When receiving a glass from an elder, one must hold the glass with two hands (with the left palm at the bottom and holding the glass with the right hand) and bow the head slightly. It’s popular to mix soju with beer or to buy it already flavoured.`, '../assets/charm.png'),
    new Product(10014, 'Foster', 4.00, 5.00, 'Austrailia', 'Lager', `William and Ralph Foster created Foster’s  in 1887. They were so dedicated to delivering Foster’s the way it should be enjoyed, they even sold it with ice to keep Australia’s warm environment at bay. More than 120 years later, the bold, refreshing taste of Foster’s is available in more than 150 countries, making it the largest-selling Australian beer brand in the world.`, '../assets/foster.png'),
    new Product(10015, 'Guiness', 11.99, 4.2, 'Ireland', 'Cream Ale', `Rich and creamy. Distinctively black. Velvety in its finish. This iconic beer is defined by harmony. Sip after sip, sweet counters bitter as the malt arrives on cue to complement a base of roasted barley. Just as the unmistakable white head sits flush atop the dark beer, so do the flavours counter and combine perfectly. This is our greatest innovation. Truly unique. Perfectly balanced. `, '../assets/guiness.png'),
    new Product(10016, 'Heineken', 7.50, 5.00, 'Netherland', 'Pale lager', `Brewing a great tasting 0.0% alcohol lager beer, is it even possible? Our master brewers started from zero and spent years exploring, brewing, and tasting before they finally created a recipe defined by its refreshing fruity notes and soft malty body – perfectly balanced. One that deserves the Heineken mark. Of course with the uncompromising Heineken characteristics since 1873: natural ingredients and Heineken’s unique A-Yeast. It wasn’t easy, but not impossible.  `, '../assets/heineken.png'),
    new Product(10017, 'Hoegaarden', 5.99, 5.00, 'Belgium', 'Belgian White', `Perhaps they had too much time on their hands. Or they were sick of the sacramental wine. Maybe it was divine inspiration? We’ll never know for sure. What we do know is that the Hoegaarden monks were the first to discover the unique recipe for wheat beer around 1445.`, '../assets/hoegaarden.png'),
    new Product(10018, 'Kilkenny', 10.00, 4.30, 'Ireland', 'Cream Ale', `Kilkenny is a nitrogenated Irish cream ale from the makers of Guinness, which originated in Kilkenny, Ireland. The 'Kilkenny' name was originally used during the 1980s and 1990s to market a stronger version of Smithwick's for the European and Canadian market due to difficulty in pronunciation of the word 'Smithwick's'. It now refers to a similar yet distinct beer.`, '../assets/kilkenny.png'),
    new Product(10019, 'Kirin', 3.50, 5.00, 'Japan', 'Lager', `Brewing beer is communing with nature. It demands respect for nature and respect for the art of brewing beer. Furthermore, even with all the technology the world has to offer, without the artistic touch, it would be impossible to make KIRIN ICHIBAN.`, '../assets/kirin.png'),
    new Product(10020, 'Sapporo', 3.99, 4.90, 'Japan', 'Lager', `Sapporo has embodied brewing excellence since 1876, making us Japan's oldest brand of beer. The original. The icon. Sapporo Premium Beer is a refreshing lager with a crisp, refined flavor and a clean finish. The perfect beer to pair with any meal and any occasion. Kampai!`, '../assets/sapporo.png'),
    new Product(10021, 'Tiger', 3.50, 4.00, 'Singapore', 'Pale Lager', `Defy expectation. Challenge convention. Change the world with your idea. It doesn’t matter where you came from or what your upbringing was. Anyone can achieve success with bold ideas and the determination to make them happen. This is what the streets of Asia are about. The place Tiger Beer was born and raised.`, '../assets/tiger.png'),
    new Product(10022, 'Tsing Tao', 3.00, 4.70, 'China', 'Pale Lager', `In Aug 1903, Tsingtao Brewery was founded by the Anglo-German Brewery Co. Ltd in Qingdao, China. The brewery brought the western settlers a high quality German style pilsner brewed with German technique, European high quality raw and, especially, mineral water from Laoshan spring,. The uniqueness and the quality have made Tsingtao Beer won many awards in different beer festivals.`, '../assets/tsingtao.png'),
];


@Injectable()
export class ProductService {
    getProducts() { return Observable.of(PRODUCTS); }

    getProduct(id: number | string) {
        return this.getProducts()
            .map(products => products.find(product => product.id === +id))
    }
}

