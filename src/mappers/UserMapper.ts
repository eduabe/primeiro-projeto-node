import User from '../models/User';

export default class UserMapper {
  public static toDTO(user: User): any {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
