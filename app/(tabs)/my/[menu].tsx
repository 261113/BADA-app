import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StubScreen } from '../../../components/ui';

type MenuContent = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
};

const content: Record<string, MenuContent> = {
  'profile-edit': {
    icon: 'create-outline',
    title: '정보 수정',
    description: '프로필 정보를 수정하는 화면이 곧 추가될 예정이에요.',
  },
  mates: {
    icon: 'people-outline',
    title: '내 메이트',
    description: '함께한 문화메이트 목록이 여기에 표시될 예정이에요.',
  },
  trades: {
    icon: 'swap-horizontal-outline',
    title: '내 거래',
    description: '예술거래 내역이 여기에 표시될 예정이에요.',
  },
  career: {
    icon: 'trending-up-outline',
    title: '내 진로',
    description: '관심 진로와 저장한 정보가 여기에 표시될 예정이에요.',
  },
  notifications: {
    icon: 'notifications-outline',
    title: '알림',
    description: '새로운 소식과 알림이 여기에 표시될 예정이에요.',
  },
  privacy: {
    icon: 'shield-checkmark-outline',
    title: '프라이버시',
    description: '개인정보 및 약관 관련 설정이 여기에 표시될 예정이에요.',
  },
};

export default function MyMenuScreen() {
  const { menu } = useLocalSearchParams<{ menu: string }>();
  const item = content[menu] ?? content['profile-edit'];

  return (
    <>
      <Stack.Screen options={{ title: item.title }} />
      <StubScreen icon={item.icon} title={item.title} description={item.description} />
    </>
  );
}
