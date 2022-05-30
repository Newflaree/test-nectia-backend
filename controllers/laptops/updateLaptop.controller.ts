import { Request, Response } from 'express';
// Models
import { Laptop } from '../../models';

/*
  PETITION: PUT
  PATH: '/api/laptops/:id'
*/
export const updateLaptop = async ( req: Request, res: Response ) => {
  const { id } = req.params;
  const { status, img, _id, ...data } = req.body;
  data.name = data.name.toUpperCase();

  try {
    const laptop = await Laptop.findByIdAndUpdate( id, data, { new: true } )
      .populate( 'user', 'name' );
      
    res.status( 200 ).json({
      ok: true,
      laptop
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-LAPTOP]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talk to the Admin'
    });
  }
}
