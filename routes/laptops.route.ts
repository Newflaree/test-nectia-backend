import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import {
  createLaptop,
  deleteLaptop,
  getLaptop,
  getLaptops,
  updateLaptop
} from '../controllers/laptops';
// Helpers
// Middlewares
import { validateFields } from '../middlewares';


/*
  PATH: '/api/laptops'
*/
const router: Router = Router();

router.post( '/', [
], createLaptop );

router.get( '/', [
], getLaptops );

router.get( '/:id', [
], getLaptop );

router.put( '/:id', [
], updateLaptop );

router.delete( '/:id', [
], deleteLaptop );


export default router;
