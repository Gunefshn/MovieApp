import '../global.css';

import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Layout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Movies' }} />
        <Stack.Screen
          name="movies/add/index"
          options={{ title: 'Add Movie', headerBackTitle: 'Home' }}
        />
        <Stack.Screen
          name="movies/[id]/index"
          options={{ title: 'Movie Detail', headerBackTitle: 'Home' }}
        />
        <Stack.Screen name="movies/[id]/edit" options={{ title: 'Edit Movie' }} />
        <Stack.Screen name="movies/[id]/delete" options={{ title: 'Delete Movie' }} />
      </Stack>
    </QueryClientProvider>
  );
}
