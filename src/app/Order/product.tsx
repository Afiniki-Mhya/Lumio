// data/products.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: "Product A",
      price: 10,
      description: "Description of Product A",
    },
    {
      id: 2,
      name: "Product B",
      price: 15,
      description: "Description of Product B",
    },
    {
      id: 3,
      name: "Product C",
      price: 20,
      description: "Description of Product C",
    },
    // Add more products as needed
  ];
  
  export default products;
  