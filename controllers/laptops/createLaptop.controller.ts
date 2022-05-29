import { Request, Response } from 'express';
// Models

/*
  PETITION: POST
  PATH: '/api/laptops'
*/
export const createLaptop = async ( req: Request, res: Response ) => {
  try {

    res.status( 201 ).json({
      ok: true,
      msg: 'createLaptop'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-LAPTOP]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
