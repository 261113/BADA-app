import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Card from '../../../components/ui/Card';
import { colors, radius, spacing } from '../../../constants/theme';

type MenuItem = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  path: string;
};

const menu: MenuItem[] = [
  { icon: 'create-outline', label: '정보 수정', path: '/my/profile-edit' },
  { icon: 'people-outline', label: '내 메이트', path: '/my/mates' },
  { icon: 'swap-horizontal-outline', label: '내 거래', path: '/my/trades' },
  { icon: 'trending-up-outline', label: '내 진로', path: '/my/career' },
  { icon: 'notifications-outline', label: '알림', path: '/my/notifications' },
  { icon: 'shield-checkmark-outline', label: '프라이버시', path: '/my/privacy' },
];

export default function MyScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>MY</Text>

        <Card style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={30} color={colors.white} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>바다 님</Text>
            <Text style={styles.intro}>예술로 세상과 연결되는 중 🌊</Text>
          </View>
        </Card>

        <View style={styles.menuList}>
          {menu.map((item) => (
            <Pressable key={item.path} style={styles.menuItem} onPress={() => router.push(item.path as never)}>
              <View style={styles.menuLeft}>
                <View style={styles.menuIconWrap}>
                  <Ionicons name={item.icon} size={18} color={colors.cobalt} />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: radius.pill,
    backgroundColor: colors.cobalt,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  name: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  intro: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  menuList: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconWrap: {
    width: 34,
    height: 34,
    borderRadius: radius.sm,
    backgroundColor: colors.cobaltSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  menuLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
});
