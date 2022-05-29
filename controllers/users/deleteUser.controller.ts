import { Request, Response } from 'express';
// Models
import { User } from '../../models';

/*
  PETITION: DELETE
  PATH: '/api/users/:id'
  DOC:
*/
export const deleteUser = async ( req: Request, res: Response ) => {
  const { id } = req.params;
  const inactivator = { status: false };

  try {
    const user = await User.findByIdAndUpdate( id, inactivator ) || { status: false };

    if ( !user.status ) {
      return res.status( 400 ).json({
        ok: false,
        msg: 'There is no user with that id'
      });
    }

    res.status( 200 ).json({
      ok: true,
      msg: 'User was successfully deleted'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-USER]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
