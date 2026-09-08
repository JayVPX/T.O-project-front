import { QueryClient } from "@tanstack/react-query";
const MINUTE = 1000 * 60;
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // cacheTime: 10 * MINUTE,
      gcTime: 10 * MINUTE,
    },
  },
});

export const queryKeys = {};
