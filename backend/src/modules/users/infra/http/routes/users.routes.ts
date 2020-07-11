import { Router, Request, Response } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersController from '@modules/users/infra/http/controllers/UsersController';

const userRoutes = Router();

const usersController = new UsersController();

userRoutes.get('/', (request: Request, response: Response) => {
  const message = 'This is the user routes';

  return response.json({ Info: message });
});

userRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

export default userRoutes;
