import { Stack } from 'expo-router';
import { colors } from '../../../constants/theme';

export default function InfoLayout() {
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
      <Stack.Screen name="[category]" options={{ title: '분야별 정보' }} />
    </Stack>
  );
}
