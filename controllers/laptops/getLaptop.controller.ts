import { Request, Response } from 'express';
// Models
import { Laptop } from '../../models';

/*
  PETITION: GET
  PATH: '/api/laptops/:id'
*/
export const getLaptop = async ( req: Request, res: Response ) => {
  const { id } = req.params;

  try {
    const laptop = await Laptop.findById( id ) || { status: false };

    if ( !laptop.status ) {
      return res.status( 400 ).json({
        ok: false,
        msg: 'There is no user with that id'
      });
    }

    res.status( 200 ).json({
      ok: true,
      laptop
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-LAPTOP]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
