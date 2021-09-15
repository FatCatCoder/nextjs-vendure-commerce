export type Product ={
    name: string,
    description: string,
    price: number,
    id: string,
    source: string,
    variants: {price: number, name: string}[],
    assets: {source: string}[]
}

export type ProductsList = {  
    products: {items: Product[]},
  }