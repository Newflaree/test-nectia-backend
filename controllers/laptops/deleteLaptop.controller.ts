import { Request, Response } from 'express';
// Models
import { Laptop } from '../../models';

/*
  PETITION: DELETE
  PATH: '/api/laptops/:id'
*/
export const deleteLaptop = async ( req: Request, res: Response ) => {
  const { id } = req.params;
  const inactivator = { status: false };

  try {
    await Laptop.findByIdAndUpdate( id, inactivator, );

    res.status( 200 ).json({
      ok: true,
      msg: 'Laptop was successfully deleted'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-LAPTOP]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talk to the Admin'
    });
  }
}
