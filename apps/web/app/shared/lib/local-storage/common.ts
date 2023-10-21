import { LocalStorageManager } from '~/shared/lib/ls-manager';

const namespace = 'common';

export const commonLSManager = new LocalStorageManager(namespace);
