import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';
import UserMapper from '../mappers/UserMapper';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  console.log(request.body);

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const userWithoutPassword = UserMapper.toDTO(user);

  return response.json({ user: userWithoutPassword, token });
});

export default sessionsRouter;
