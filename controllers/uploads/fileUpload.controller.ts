import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../interfaces/http-interfaces';
// Models

/*
  PETITION: PUT
  PATH: '/api/uploads/:collection/:id'
*/
export const fileUpload = async ( req: UserAuthRequest, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'fileUpload'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.FILE-UPLOAD]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talk to the Admin'
    });
  }
}
