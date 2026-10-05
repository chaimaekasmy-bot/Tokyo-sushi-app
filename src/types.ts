export type Language = 'fr' | 'ar';

export type CategoryId = 'all' | 'crunchy-rolls' | 'specialite-mitsuki' | 'ramen-soups' | 'desserts';

export interface CategoryInfo {
  id: CategoryId;
  name: {
    fr: string;
    ar: string;
  };
  subtitle?: {
    fr: string;
    ar: string;
  };
}

export interface MenuItem {
  id: string;
  categoryId: 'crunchy-rolls' | 'specialite-mitsuki' | 'ramen-soups' | 'desserts';
  name: {
    fr: string;
    ar: string;
  };
  description: {
    fr: string;
    ar: string;
  };
  price: number; // in DH
  image: string;
  pieces?: string;
  badge?: {
    fr: string;
    ar: string;
  };
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface OrderForm {
  fullName: string;
  phone: string;
  address: string;
  notes: string;
  paymentMethod: 'cash';
}

export interface OrderConfirmation extends OrderForm {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  createdAt: string;
  estimatedDeliveryTime: string;
}
