import { faker } from '$lib/utils';
import type { User } from '$types';

export const create = (): User => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    username: faker.internet.username({ firstName, lastName }),
    fullname: faker.person.fullName({ firstName, lastName })
  };
};
