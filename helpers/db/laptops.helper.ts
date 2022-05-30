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
