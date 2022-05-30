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
import { laptopIdValidator, laptopNameValidator } from '../helpers/db/laptops.helper';
// Middlewares
import { validateFields, validateJWT } from '../middlewares';


/*
  PATH: '/api/laptops'
*/
const router: Router = Router();

router.post( '/', [
  validateJWT,
  check( 'name', 'Laptop name is required' ).not().isEmpty(),
  check( 'brand', 'Laptop brand is required' ).not().isEmpty(),
  check( 'proce', 'Laptop processor is required' ).not().isEmpty(),
  check( 'ram', 'Laptop ram is required' ).not().isEmpty(),
  check( 'storage', 'Laptop storage is required' ).not().isEmpty(),
  check( 'name' ).custom( laptopNameValidator ),
  validateFields
], createLaptop );

router.get( '/', [
  validateJWT,
  validateFields
], getLaptops );

router.get( '/:id', [
  validateJWT,
  check( 'id', 'Invalid mongo id' ).isMongoId(),
  check( 'id' ).custom( laptopIdValidator ),
  validateFields
], getLaptop );

router.put( '/:id', [
], updateLaptop );

router.delete( '/:id', [
  validateJWT,
  check( 'id', 'Invalid mongo id' ).isMongoId(),
  check( 'id' ).custom( laptopIdValidator ),
  validateFields
], deleteLaptop );


export default router;
