import { Response } from 'express';
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config( process.env.CLOUDINARY_URL || '' );
// Interfaces
import { FileRequest } from '../../interfaces/http-interfaces';
// Models
import { Laptop, User } from '../../models';

/*
  PETITION: PUT
  PATH: '/api/uploads/:collection/:id'
*/
export const fileUpload = async ( req: FileRequest, res: Response ) => {
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

    if ( model.img ) {
      const cutName = model.img.split( '/' );
      const name = cutName[ cutName.length - 1 ];
      const [ public_id ] = name.split( '.' );

      await cloudinary.uploader.destroy( public_id );
    }

    if ( req.files === null ) {
      return res.status(400).json({
        ok: false,
        msg: 'There are no files to upload'
      });
    }

    const { tempFilePath } = req.files.file;
    const { secure_url } = await cloudinary.uploader.upload( tempFilePath );

    model.img = secure_url;
    await model.save();

    res.status( 200 ).json({
      ok: true,
      model
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.FILE-UPLOAD]'.red }: Error details - ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talk to the Admin'
    });
  }
}
