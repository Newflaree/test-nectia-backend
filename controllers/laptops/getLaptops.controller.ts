import { Request, Response } from 'express';
import { Laptop } from '../../models';
// Models

/*
  PETITION: GET
  PATH: '/api/laptops'
*/
export const getLaptops = async ( req: Request, res: Response ) => {
  const { from = 0, limit = 5 } = req.query;
  const condition = { status: true };
  
  try {
    const [ total, laptops ] = await Promise.all([
      Laptop.countDocuments( condition ),
      Laptop.find( condition )
        .populate( 'user', 'name' )
        .skip( Number( from ) )
        .limit( Number( limit ) )
    ]);

    res.status( 200 ).json({
      ok: true,
      total,
      laptops
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-LAPTOPS]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talk to the Admin'
    });
  }
}
