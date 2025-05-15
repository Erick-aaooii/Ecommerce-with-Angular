import { Product } from '../models/product'

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Vestido 1',
    description: 'descrição foda',
    price: 29.99,
    variants: [
      {
        color: 'Preto',
        colorHex: '#000000',
        sizes: [
          { size: 'P', quantity: 3 },
          { size: 'M', quantity: 5 },
          { size: 'G', quantity: 2 }
        ]
      },
      {
        color: 'Vermelho',
        colorHex: '#FF0000',
        sizes: [
          { size: 'P', quantity: 1 },
          { size: 'M', quantity: 0 },
          { size: 'G', quantity: 4 }
        ]
      }
    ],
    status: 'disponível',
    category: 'Vestidos',
    brand: '',
    images: ['imgs/Produtos/produto1.jpg','imgs/Produtos/produto1.jpg']
  },
  {
    id: 2,
    name: 'Vestido 2',
    description: 'descrição foda',
    price: 29.99,
    variants: [
      {
        color: 'Azul',
        colorHex: '#0000FF',
        sizes: [
          { size: 'P', quantity: 2 },
          { size: 'M', quantity: 6 },
          { size: 'GG', quantity: 1 }
        ]
      }
    ],
    status: 'disponível',
    category: 'Vestidos',
    brand: 'Nike',
    images: ['imgs/Produtos/produto2.jpg']
  },
  {
    id: 3,
    name: 'Vestido 3',
    description: '',
    price: 29.99,
    variants: [
      {
        color: 'Verde',
        colorHex: '#00FF00',
        sizes: [
          { size: 'M', quantity: 3 },
          { size: 'G', quantity: 3 },
          { size: 'GG', quantity: 2 }
        ]
      }
    ],
    status: 'disponível',
    category: 'Vestidos',
    brand: 'Nike',
    images: ['imgs/Produtos/produto3.jpg']
  },
  {
    id: 4,
    name: 'Vestido 4',
    description: '',
    price: 29.99,
    variants: [
      {
        color: 'Rosa',
        colorHex: '#FFC0CB',
        sizes: [
          { size: 'P', quantity: 4 },
          { size: 'M', quantity: 2 },
          { size: 'G', quantity: 1 }
        ]
      }
    ],
    status: 'disponível',
    category: 'Vestidos',
    brand: 'Nike',
    images: ['imgs/Produtos/produto4.jpg']
  },
  {
    id: 5,
    name: 'Vestido 5',
    description: '',
    price: 29.99,
    variants: [
      {
        color: 'Branco',
        colorHex: '#FFFFFF',
        sizes: [
          { size: 'M', quantity: 5 },
          { size: 'G', quantity: 2 }
        ]
      }
    ],
    status: 'disponível',
    category: 'Vestidos',
    brand: 'Nike',
    images: ['imgs/Produtos/produto5.jpg']
  },
  {
    id: 6,
    name: 'Vestido 6',
    description: '',
    price: 29.99,
    variants: [
      {
        color: 'Amarelo',
        colorHex: '#FFFF00',
        sizes: [
          { size: 'P', quantity: 0 },
          { size: 'M', quantity: 3 },
          { size: 'GG', quantity: 1 }
        ]
      }
    ],
    status: 'disponível',
    category: 'Vestidos',
    brand: 'Nike',
    images: ['imgs/Produtos/produto6.jpg']
  },
  {
    id: 7,
    name: 'Vestido 7',
    description: '',
    price: 29.99,
    variants: [
      {
        color: 'Cinza',
        colorHex: '#808080',
        sizes: [
          { size: 'P', quantity: 2 },
          { size: 'M', quantity: 1 },
          { size: 'G', quantity: 0 }
        ]
      }
    ],
    status: 'disponível',
    category: 'Vestidos',
    brand: 'Nike',
    images: ['imgs/Produtos/produto7.jpg']
  },
  {
    id: 8,
    name: 'Vestido 8',
    description: '',
    price: 29.99,
    variants: [
      {
        color: 'Lilás',
        colorHex: '#C8A2C8',
        sizes: [
          { size: 'M', quantity: 3 },
          { size: 'G', quantity: 2 }
        ]
      }
    ],
    status: 'disponível',
    category: 'Vestidos',
    brand: 'Nike',
    images: ['imgs/Produtos/produto8.jpg']
  },
  {
    id: 9,
    name: 'Vestido 9',
    description: '',
    price: 29.99,
    variants: [
      {
        color: 'Bege',
        colorHex: '#F5F5DC',
        sizes: [
          { size: 'P', quantity: 2 },
          { size: 'GG', quantity: 4 }
        ]
      }
    ],
    status: 'disponível',
    category: 'Vestidos',
    brand: 'Nike',
    images: ['imgs/Produtos/produto9.jpg']
  }
]
