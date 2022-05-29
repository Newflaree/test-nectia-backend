import { Request, Response } from 'express';
// Models
import { User } from '../../models';

/*
  PATH: '/api/users'
  DOC:
*/
export const getUsers = async ( req: Request, res: Response ) => {
  
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'getUsers'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-USERS]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
