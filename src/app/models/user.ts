import { Purchase } from "./product";

export interface User {
  uid: string;
  email: string;
  name: string;
  cpf: string;
  telephone: string;
  orders: Purchase[];
  address?: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  createdAt?: Date;
  isAdmin?: boolean;
}
