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
    const laptop = await Laptop.findById( id )
      .populate( 'user', 'name' );

    res.status( 200 ).json({
      ok: true,
      laptop
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-LAPTOP]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talk to the Admin'
    });
  }
}
