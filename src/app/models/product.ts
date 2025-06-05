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

export interface Purchase {
  id: string // ID único da compra
  items: CartItem[] // Itens comprados
  subtotal: number // Soma de todos os produtos (sem frete)
  shipping: number // Valor do frete
  total: number // subtotal + shipping
  status: 'pendente' | 'pago' | 'enviado' | 'entregue' | 'cancelado'
  createdAt: Date // Data da compra
  buyerId: string // ID do comprador (pode ser email, uid, etc)
  shippingAddress?: {
    street: string
    number: string
    complement?: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
  }
}
