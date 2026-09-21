import { Stack } from 'expo-router';
import { colors } from '../../../constants/theme';

export default function MapLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.cream },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
