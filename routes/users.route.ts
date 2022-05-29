import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import { getUsers } from '../controllers/users';

/*
  PATH: '/api/users'
*/
const router: Router = Router();

router.get( '/', [
], getUsers );


export default router;
