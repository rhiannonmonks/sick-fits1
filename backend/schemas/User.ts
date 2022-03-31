import { list } from '@keystone-next/keystone/schema';
import { password, text } from '@keystone-next/fields';

export const User = list({
  // access
  // ui
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // TODO, add notes, cart, orders
  },
});
