import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import { collectionSearch } from '../controllers/searches';
// Helpers
// Middlewares
import { validateFields, validateJWT } from '../middlewares';

/*
  PATH: '/api/searches'
*/
const router: Router = Router();


router.get( '/:collection/:term', [
  validateJWT,
  validateFields
], collectionSearch );

export default router;
