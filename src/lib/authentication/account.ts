import { faker } from '$lib/faker';
import type { User } from '$types';

export const generateAccount = (): User => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    username: faker.internet.username({ firstName, lastName }),
    fullname: faker.person.fullName({ firstName, lastName })
  };
};
