interface ProductList {
  id: number;
  name: string;
  image: string;
  brand: string;
  price: number;
  isWishlist?: boolean | false;
  isTrending?: boolean | false;
  status?: boolean | false;
  star?: number | 0;
}
