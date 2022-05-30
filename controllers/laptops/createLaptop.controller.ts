import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../interfaces/http-interfaces';
// Models
import { Laptop } from '../../models';

/*
  PETITION: POST
  PATH: '/api/laptops'
*/
export const createLaptop = async ( req: UserAuthRequest, res: Response ) => {
  const name = req.body.name.toUpperCase();
  const { brand, proce, ram, storage } = req.body;

  const data = {
    name,
    brand,
    proce,
    ram,
    storage,
    user: req.user.id
  }

  try {
    const laptop = new Laptop( data );
    await laptop.save();

    res.status( 201 ).json({
      ok: true,
      laptop
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-LAPTOP]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talk to the Admin'
    });
  }
}
