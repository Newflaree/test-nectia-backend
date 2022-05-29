import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import { deleteUser, getUsers } from '../controllers/users';
// Helpers
import { userIdValidator } from '../helpers/db/users.helper';
import {validateFields, validateJWT} from '../middlewares';
// Middlewares

/*
  PATH: '/api/users'
*/
const router: Router = Router();

router.get( '/', [
  validateJWT,
  validateFields
], getUsers );

router.delete( '/:id', [
  validateJWT,
  check( 'id', 'Invalid mongo id' ).isMongoId(),
  check( 'id' ).custom( userIdValidator ),
  validateFields
], deleteUser );


export default router;
