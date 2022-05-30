import { Schema, model } from 'mongoose';
// Interfaces
import { LaptopProps } from '../interfaces/db-interfaces';

const LaptopSchema = new Schema<LaptopProps>({
  name: {
    type: String,
    required: [ true, 'Laptop name is required' ],
    unique: true
  },
  brand: {
    type: String,
    required: [ true, 'Laptop brand is required' ]
  },
  proce: {
    type: String,
    required: [ true, 'Laptop processor is required' ]
  },
  ram: {
    type: String,
    required: [ true, 'Laptop ram is required' ]
  },
  storage: {
    type: String,
    required: [ true, 'Laptop storage is required' ]
  },
  img: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: Boolean,
    default: true
  }
});

LaptopSchema.methods.toJSON = function() {
  const { __v, _id, ...laptop } = this.toObject();
  laptop.id = _id;
  return laptop;
}

export default model<LaptopProps>( 'Laptop', LaptopSchema );
