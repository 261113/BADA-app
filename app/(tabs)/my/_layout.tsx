import { Stack } from 'expo-router';
import { colors } from '../../../constants/theme';

export default function MyLayout() {
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
      <Stack.Screen name="profile-edit" options={{ title: '정보 수정' }} />
      <Stack.Screen name="mates" options={{ title: '내 메이트' }} />
      <Stack.Screen name="trades" options={{ title: '내 거래' }} />
      <Stack.Screen name="career" options={{ title: '내 진로' }} />
      <Stack.Screen name="notifications" options={{ title: '알림' }} />
      <Stack.Screen name="privacy" options={{ title: '프라이버시' }} />
    </Stack>
  );
}
