import { useRouter, useRootNavigationState } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();
  const rootNavigation = useRootNavigationState();

  useEffect(() => {
    if (!rootNavigation?.key) return; // Wait for navigation to be ready

    router.replace('/(tabs)/project'); // your default tab page
  }, [rootNavigation]);

  return null;
}
