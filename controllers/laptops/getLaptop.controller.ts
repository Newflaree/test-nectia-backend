import { Request, Response } from 'express';
// Models

/*
  PETITION: GET
  PATH: '/api/laptops/:id'
*/
export const getLaptop = async ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'getLaptop'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-LAPTOP]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
