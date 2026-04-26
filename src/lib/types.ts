export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  compare_price: number | null;
  category: string;
  brand: string | null;
  images: string[];
  stock: number;
  rating: number;
  review_count: number;
  featured: boolean;
  active: boolean;
  created_at: string;
};

export type CartItem = {
  product_id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
};
