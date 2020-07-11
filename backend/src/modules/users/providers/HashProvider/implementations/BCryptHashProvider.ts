import { hash, compare } from 'bcryptjs';

import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 12);
  }

  public async compare(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export default BCryptHashProvider;
