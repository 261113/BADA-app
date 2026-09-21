import { Stack } from 'expo-router';
import { colors } from '../../../constants/theme';

export default function CommunityLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.cream },
        headerTintColor: colors.cobalt,
        headerTitleStyle: { fontWeight: '700' },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.cream },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: '게시글' }} />
      <Stack.Screen name="write" options={{ title: '글쓰기' }} />
    </Stack>
  );
}
