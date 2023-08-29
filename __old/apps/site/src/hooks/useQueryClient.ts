import { createQueryNormalizer } from '@normy/react-query';
import { QueryClient } from '@tanstack/query-core';
import { useMemo, useState } from 'react';

export default function useQueryClient() {
  const [client] = useState(new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }));

  createQueryNormalizer(client);

  return useMemo(() => client, [client]);
}
