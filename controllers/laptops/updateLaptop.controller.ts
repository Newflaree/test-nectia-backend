import { Request, Response } from 'express';
// Models

/*
  PETITION: PUT
  PATH: '/api/laptops/:id'
*/
export const updateLaptop = async ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'updateLaptop'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-LAPTOP]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
