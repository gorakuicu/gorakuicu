import type { ChipProps } from '@nextui-org/react';

import { createRoot } from 'react-dom/client';

import { Message } from '~/shared/ui/common/message';

export const message = (
  content: string,
  type: ChipProps['color'] = 'default',
): void => {
  const container = document.createElement('div');
  document.body.append(container);

  const root = createRoot(container);

  // eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
  const onClose = () => {
    root.unmount();
    container.remove();
  };

  root.render(<Message content={content} onClose={onClose} type={type} />);
};
