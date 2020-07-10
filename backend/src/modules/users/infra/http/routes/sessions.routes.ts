import { Router, Request, Response } from 'express';

const sessionRoutes = Router();

sessionRoutes.get('/', (request: Request, response: Response) => {
  const message = 'This is the sessions routes';

  return response.json({ Info: message });
});

export default sessionRoutes;
