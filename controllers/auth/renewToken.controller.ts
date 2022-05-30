import { Response } from 'express';
import bcrypt from 'bcryptjs';
// Helpers
import { generateJWT } from '../../helpers/jwt';
// Interfaces
import { UserAuthRequest } from '../../interfaces/http-interfaces';
// Models
import { User } from '../../models';

/*
  PETITION: GET
  PATH: '/api/auth/renew'
*/
export const renewToken = async ( req: UserAuthRequest, res: Response ) => {
  const { _id } = req.user;

  try {
    const [ user, token ] = await Promise.all([
      User.findById( _id ) || { status: false },
      generateJWT( _id )
    ]);

    if ( !user?.status ) {
      return res.status(400).json({
        ok: false,
        msg: 'There is no user with that id'
      });
    }

    res.status( 200 ).json({
      ok: true,
      user,
      token
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.RENEW-TOKEN]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talk to the Admin'
    });
  }
}
