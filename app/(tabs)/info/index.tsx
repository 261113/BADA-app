import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TopTabs from '../../../components/ui/TopTabs';
import { colors, radius, spacing } from '../../../constants/theme';
import { categories } from '../../../data/mock';

export default function InfoScreen() {
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>정보</Text>
        <Text style={styles.subtitle}>
          {tab === 0 ? '관심 분야의 진로 정보를 확인해보세요' : '분야별 정보·오디션·학원 소식을 모았어요'}
        </Text>

        <View style={styles.tabsWrap}>
          <TopTabs tabs={['진로', '정보']} activeIndex={tab} onChange={setTab} />
        </View>

        <View style={styles.grid}>
          {categories.map((category) => (
            <Pressable
              key={category.id}
              style={styles.gridItem}
              onPress={() => router.push(`/info/${category.id}`)}
            >
              <View style={styles.iconCircle}>
                <Ionicons name={category.icon as keyof typeof Ionicons.glyphMap} size={24} color={colors.cobalt} />
              </View>
              <Text style={styles.gridLabel}>{category.label}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const CARD_WIDTH = '23%';

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
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  tabsWrap: {
    marginBottom: spacing.lg,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: CARD_WIDTH,
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: radius.lg,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
    shadowColor: '#8A6A3D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  gridLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textPrimary,
  },
});
