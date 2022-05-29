import { Request, Response } from 'express';
// Models

/*
  PETITION: DELETE
  PATH: '/api/laptops/:id'
*/
export const deleteLaptop = async ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'deleteLaptop'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-LAPTOP]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
