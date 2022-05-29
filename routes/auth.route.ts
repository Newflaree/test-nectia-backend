import { Router } from 'express';
// Controllers
import { authLogin, authRegister } from '../controllers/auth';


/*
  PATH: '/api/auth'
*/
const router: Router = Router();

router.post( '/register', authRegister );
router.post( '/login', authLogin );


export default router;
