import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../interfaces/http-interfaces';
// Models

/*
  PETITION: GET
  PATH: '/api/uploads/:collection/:id'
*/
export const showImage = async ( req: UserAuthRequest, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'showImage'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.SHOW-IMAGE]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talk to the Admin'
    });
  }
}
