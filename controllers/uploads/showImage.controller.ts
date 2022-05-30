import { Response } from 'express';
import path from 'path';
// Interfaces
import { FileRequest } from '../../interfaces/http-interfaces';
// Models
import { Laptop, User } from '../../models';

/*
  PETITION: GET
  PATH: '/api/uploads/:collection/:id'
*/
export const showImage = async ( req: FileRequest, res: Response ) => {
  const { id, collection } = req.params;
  let model: any;

  try {
    switch ( collection ) {
      case 'users':
        model = await User.findById( id );

        if ( !model || !model.status ) {
          return res.status( 400 ).json({
            ok: false,
            msg: 'There is no user with that id'
          });
        }

        break;

      case 'laptops':
        model = await Laptop.findById( id );

        if ( !model || !model.status ) {
          return res.status( 400 ).json({
            ok: false,
            msg: 'There is no user with that id'
          });
        }

        break;

      default:
        return res.status( 400 ).json({
          ok: false,
          msg: 'This endpoint is not yet validated'
        });
    }

    if ( !model?.img ) {
      const imagPath = path.join( __dirname, '../../../assets/no-image.jpg' );
      return res.status( 200 ).sendFile( imagPath );
    }

    res.status( 200 ).json({
      ok: true,
      img: model.img
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.SHOW-IMAGE]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talk to the Admin'
    });
  }
}
