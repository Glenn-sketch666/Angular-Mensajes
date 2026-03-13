import { Component, Input, inject } from "@angular/core";
import { Product } from "../../models/producto.model";
import { CartService } from "../../services/carrito.service";

@Component({
    selector: 'product-card',
    imports: [],
    templateUrl: './producto.component.html',
    styleUrl: './producto.component.css'
})
export class ProductCardComponent {
    @Input({ required: true }) product!: Product;

    private cartService = inject(CartService);

    addToCart() {
        this.cartService.addToCart(this.product);
    }
}