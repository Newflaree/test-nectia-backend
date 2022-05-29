import { ObjectId } from "mongoose";

export interface UserProps {
  name: string;
  email: string;
  password: string;
  role: string;
  status: boolean;
}

export interface LaptopProps {
  name: string;
  brand: string;
  proce: string;
  ram: string;
  storage: string;
  img?: string;
  user: ObjectId;
  status: boolean;
}
