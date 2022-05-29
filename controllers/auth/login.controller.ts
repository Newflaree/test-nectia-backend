import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
// Models
import { User } from '../../models';

/*
  PATH: '/api/auth/login'
  DOC:
*/
export const authLogin = async ( req: Request, res: Response ) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // Check if email exists
    if ( !user ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Incorrect email or password'
      });
    }

    // Check if user is active
    if ( !user.status ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Incorrect email or password'
      });
    }

    // Check if password is valid
    const validPass = bcrypt.compareSync( password, user.password );
    if ( !validPass ) {
      return res.status( 401 ).json({
        ok: false,
        msg: 'Incorrect email or password'
      });
    }

    //TODO: Generate JWT

    res.status( 200 ).json({
      ok: true,
      user
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH-LOGIN]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking to the Admin'
    });
  }
}
