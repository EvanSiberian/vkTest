export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
    thumbnail: string;
}

export interface CartState {
    items: CartItem[];
    total: number;
    discountedTotal: number;
}
