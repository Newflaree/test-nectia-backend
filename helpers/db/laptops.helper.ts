// Moldels
import { Laptop } from "../../models"

export const laptopNameValidator = async ( name: string = '' ) => {
  const capName = name.toUpperCase();
  const laptopExists = await Laptop.findOne({ name: capName });
   
  if ( laptopExists ) {
    throw new Error( 'There is already a laptop with that name' );
  }

  return true;
}

export const laptopIdValidator = async ( id: string = '' ) => {
  const laptopExists = await Laptop.findById( id );
   
  if ( !laptopExists ) {
    throw new Error( 'There is no laptop with that id' );
  }

  if ( !laptopExists.status ) {
    throw new Error( 'There is no laptop with that id' );
  }

  return true;
}
