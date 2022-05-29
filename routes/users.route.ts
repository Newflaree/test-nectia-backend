import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import { getUsers } from '../controllers/users';
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


export default router;
