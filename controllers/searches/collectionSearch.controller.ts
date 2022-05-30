import { Request, Response } from 'express';
// Models
import { Laptop, User } from '../../models';

/*
  PETITION: GET
  PATH: '/api/searches/:collection/:term'
*/
export const collectionSearch = async ( req: Request, res: Response ) => {
  const { from = 0, limit = 5 } = req.query;
  const { collection, term } = req.params;
  const regex = new RegExp( term, 'i' );

  const condition = {
    name: regex,
    status: true
  };

  try {
    switch ( collection ) {
      case 'users':
        const [ totalUsers, users ] = await Promise.all([
          User.countDocuments( condition ),
          User.find( condition )
            .skip( Number( from ) )
            .limit( Number( limit ) )
        ]);

        return res.status( 200 ).json({
          ok: true,
          total: totalUsers,
          users
        });

      case 'laptops':
        const [ totalLaptops, laptops ] = await Promise.all([
          Laptop.countDocuments( condition ),
          Laptop.find( condition )
            .populate( 'user', 'name' )
            .skip( Number( from ) )
            .limit( Number( limit ) )
        ]);

        return res.status( 200 ).json({
          ok: true,
          total: totalLaptops,
          laptops
        });

      default:
        return res.status( 400 ).json({
          ok: false,
          msg: 'Collection not allowed'
        });
    }

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.COLLECTION-SEARCH]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talk to the Admin'
    });
  }
}
