import { useMutation } from '@tanstack/react-query';

export function useTriage() {
  return useMutation({
    mutationFn: async (payload: any) => {
      const res = await fetch('/api/ai/triage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Triage failed');
      return res.json();
    }
  });
}
