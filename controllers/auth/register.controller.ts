import { Request, Response } from 'express'

/*
  PATH: ''
  DOC:
*/
export const authRegister = async ( req: Request, res: Response ) => {
  try {

    res.status( 201 ).json({
      ok: true,
      msg: 'authRegister'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.AUTH-REGISTER]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking to the Admin'
    });
  }
}
