import { Router } from 'express';

import sessionRoutes from '@modules/users/infra/http/routes/sessions.routes';
import usersRoutes from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/sessions', sessionRoutes);
routes.use('/users', usersRoutes);

export default routes;
