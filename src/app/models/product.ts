export interface ProductVariant {
  color: string // ex: "vermelho", ou um hex "#FF0000"
  colorHex?: string // opcional, se quiser separar nome da cor da cor visual
  sizes: {
    size: 'P' | 'M' | 'G' | 'GG'
    quantity: number
  }[]
}

export interface Product {
  id: number
  name: string
  description: string
  price: number
  status: 'disponível' | 'esgotado' | 'indisponível'
  category: string
  brand: string
  images: string[]
  variants: ProductVariant[]
}

export interface CartItem {
  product: Product
  variantColor: string
  size: 'P' | 'M' | 'G' | 'GG'
  quantity: number
  total: number
}