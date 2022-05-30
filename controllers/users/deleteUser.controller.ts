import { Request, Response } from 'express';
// Models
import { User } from '../../models';

/*
  PETITION: DELETE
  PATH: '/api/users/:id'
*/
export const deleteUser = async ( req: Request, res: Response ) => {
  const { id } = req.params;
  const inactivator = { status: false };

  try {
    await User.findByIdAndUpdate( id, inactivator );

    res.status( 200 ).json({
      ok: true,
      msg: 'User was successfully deleted'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-USER]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talk to the Admin'
    });
  }
}
