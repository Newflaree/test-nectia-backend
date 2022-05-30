import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import { fileUpload, showImage } from '../controllers/uploads';
// Helpers
import { allowedCollections } from '../helpers/db/collections.helper';
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/uploads'
*/
const router: Router = Router();

router.put( '/:collection/:id', [
  validateJWT,
  check( 'id', 'Invalid mongo id' ).isMongoId(),
  check( 'collection' ).custom( c => allowedCollections( c, [ 'users', 'laptops' ] ) ),
  validateFields
], fileUpload );

router.get( '/:collection/:id', [
  validateJWT,
  check( 'id', 'Invalid mongo id' ).isMongoId(),
  check( 'collection' ).custom( c => allowedCollections( c, [ 'users', 'laptops' ] ) ),
  validateFields
], showImage );

export default router;
