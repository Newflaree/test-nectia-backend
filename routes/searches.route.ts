import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import { collectionSearch } from '../controllers/searches';
// Helpers
import { allowedCollections } from '../helpers/db/collections.helper';
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/searches'
*/
const router: Router = Router();

router.get( '/:collection/:term', [
  validateJWT,
  check( 'collection' ).custom( c => allowedCollections( c, [ 'users', 'laptops' ] ) ),
  validateFields
], collectionSearch );

export default router;
