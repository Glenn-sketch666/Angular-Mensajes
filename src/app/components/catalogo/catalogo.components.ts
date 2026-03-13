import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent} from "../productos/producto.component";
import { ProductsService } from "../../services/productos.services";
import { Product } from '../../models/producto.model';

@Component({
    selector: 'app-catalogo',
    standalone: true,
    imports: [CommonModule, RouterLink, ProductCardComponent],
    templateUrl: './catalogo.components.html',
    styleUrl: './catalogo.components.css'
})

export class CatalogoComponent {
    private productsService = inject(ProductsService);
    products = this.productsService.getAll();

    trackById = (index: number, item: Product) => item.id;
}