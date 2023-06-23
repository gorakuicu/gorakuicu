import { BaseFields, list, ListConfig } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { checkbox, password, text, timestamp } from '@keystone-6/core/fields';
import { BaseListTypeInfo } from '@keystone-6/core/types';

export function User(): ListConfig<any, BaseFields<BaseListTypeInfo>> {
  return list({
    // access: {
    //   operation: {
    //     query: isAdmin,
    //     create: isAdmin,
    //     update: isAdmin,
    //     delete: isAdmin,
    //   },
    // },
    db: {
      idField: { kind: 'uuid' },
    },
    access: allowAll,
    fields: {
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),
      password: password({ validation: { isRequired: true } }),
      createdAt: timestamp({
        defaultValue: { kind: 'now' },
      }),
      isAdmin: checkbox({
        defaultValue: false,
      }),
    },
  });
}
