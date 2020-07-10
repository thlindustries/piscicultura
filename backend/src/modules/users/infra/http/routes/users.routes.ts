import { Router, Request, Response } from 'express';

const userRoutes = Router();

userRoutes.get('/', (request: Request, response: Response) => {
  const message = 'This is the user routes';

  return response.json({ Info: message });
});

export default userRoutes;
