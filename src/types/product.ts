interface Product {
    _id: number;
    name: string;
    image: string;
    brand: string;
    category: string;
    description: string;
    rating: number | null;
    numReviews: number;
    price: number;
    countinStock: number;
    createdAt: string;
    user: number;
  }
  
  export type { Product };