export interface Product {
    id: number
    name: string
    description: string
    price: number
    quantity: number
    status: 'disponível' | 'esgotado' | 'indisponível'
    category: string
    brand: string
    images: string[]
  }
  