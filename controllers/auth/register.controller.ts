import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
// Helpers
import { generateJWT } from '../../helpers/jwt';
// Models
import { User } from '../../models';

/*
  PETITION: POST
  PATH: '/api/auth/register'
  DOC:
*/
export const authRegister = async ( req: Request, res: Response ) => {
  const { name, email, password } = req.body;
  
  try {
    // Create new User
    const user = new User({ name, email, password });

    // Encrypt password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt );

    // Save to DB
    await user.save();

    // Generate JWT
    const token = await generateJWT( user._id );

    res.status( 201 ).json({
      ok: true,
      user,
      token
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH-REGISTER]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
