import { Request, Response } from 'express';
// Models

/*
  PETITION: GET
  PATH: '/api/laptops'
*/
export const getLaptops = async ( req: Request, res: Response ) => {
  try {

    res.status( 200 ).json({
      ok: true,
      msg: 'getLaptops'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-LAPTOPS]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}
