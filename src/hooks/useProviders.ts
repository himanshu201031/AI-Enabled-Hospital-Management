import { useQuery } from '@tanstack/react-query';

export function useProviders() {
  return useQuery({
    queryKey: ['providers'],
    queryFn: async () => {
      const res = await fetch('/api/providers');
      if (!res.ok) throw new Error('Failed to fetch providers');
      return res.json();
    }
  });
}
