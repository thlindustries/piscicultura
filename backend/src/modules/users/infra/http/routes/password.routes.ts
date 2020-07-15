import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
// import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRoutes = Router();

const forgotPasswordController = new ForgotPasswordController();
// const resetPasswordController = new ResetPasswordController();

passwordRoutes.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgotPasswordController.create,
);

// passwordRoutes.post(
//   '/reset',
//   celebrate({
//     [Segments.BODY]: {
//       token: Joi.string().uuid().required(),
//       password: Joi.string().min(6).required(),
//       confirmPassword: Joi.valid(Joi.ref('password')).required(),
//     },
//   }),
//   resetPasswordController.create,
// );

export default passwordRoutes;
