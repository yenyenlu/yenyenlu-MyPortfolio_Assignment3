import { Router } from 'express'; import { body } from 'express-validator'; import { signin, signup, signout } from '../controllers/authController.js';
const r=Router();
r.post('/signup',[body('name').notEmpty(),body('email').isEmail(),body('password').isLength({min:6})],signup);
r.post('/signin',[body('email').isEmail(),body('password').notEmpty()],signin);
r.get('/signout',signout);
export default r;