import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Card from '../../../components/ui/Card';
import SectionHeader from '../../../components/ui/SectionHeader';
import WatercolorBackground from '../../../components/ui/WatercolorBackground';
import { colors, radius, spacing } from '../../../constants/theme';
import { infoItems, posts } from '../../../data/mock';

const todayQuote = '예술은 삶을 비추는 거울이다. 오늘도 당신의 창작을 응원합니다.';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const hotPosts = posts.slice(0, 3);
  const todayInfo = infoItems.slice(0, 3);

  return (
    <View style={styles.container}>
      <WatercolorBackground variant="header" />
      <ScrollView
        contentContainerStyle={[styles.content, { paddingTop: insets.top + spacing.md }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.brand}>BADA</Text>
        <Text style={styles.greeting}>오늘도 예술로 연결되는 하루예요 🎨</Text>

        <Card style={styles.quoteCard}>
          <Text style={styles.quoteLabel}>오늘의 문구</Text>
          <Text style={styles.quoteText}>{todayQuote}</Text>
        </Card>

        <View style={styles.section}>
          <SectionHeader
            title="오늘의 핫이슈 커뮤니티"
            actionLabel="더보기"
            onPressAction={() => router.push('/community')}
          />
          {hotPosts.map((post) => (
            <Pressable key={post.id} onPress={() => router.push(`/community/${post.id}`)}>
              <Card style={styles.listCard}>
                <View style={styles.listCardRow}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{post.board}</Text>
                  </View>
                  <Text style={styles.listCardMeta}>{post.createdAt}</Text>
                </View>
                <Text style={styles.listCardTitle} numberOfLines={1}>
                  {post.title}
                </Text>
                <Text style={styles.listCardBody} numberOfLines={1}>
                  {post.content}
                </Text>
              </Card>
            </Pressable>
          ))}
        </View>

        <View style={[styles.section, { marginBottom: spacing.xl }]}>
          <SectionHeader
            title="오늘의 정보"
            actionLabel="더보기"
            onPressAction={() => router.push('/info')}
          />
          {todayInfo.map((item) => (
            <Pressable key={item.id} onPress={() => router.push(`/info/${item.categoryId}`)}>
              <Card style={styles.listCard}>
                <View style={styles.listCardRow}>
                  <View style={[styles.badge, styles.badgeYellow]}>
                    <Text style={[styles.badgeText, styles.badgeYellowText]}>{item.type}</Text>
                  </View>
                  <Text style={styles.listCardMeta}>{item.period}</Text>
                </View>
                <Text style={styles.listCardTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <View style={styles.placeRow}>
                  <Ionicons name="location-outline" size={13} color={colors.textSecondary} />
                  <Text style={styles.listCardBody} numberOfLines={1}>
                    {item.place}
                  </Text>
                </View>
              </Card>
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
  },
  brand: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.cobalt,
    letterSpacing: 1,
  },
  greeting: {
    marginTop: 4,
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  quoteCard: {
    backgroundColor: colors.cobalt,
    marginBottom: spacing.xl,
  },
  quoteLabel: {
    color: colors.yellow,
    fontSize: 12,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  quoteText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
  },
  section: {
    marginBottom: spacing.xl,
  },
  listCard: {
    marginBottom: spacing.sm,
    paddingVertical: spacing.md,
  },
  listCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  badge: {
    backgroundColor: colors.cobaltSoft,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.cobaltDark,
  },
  badgeYellow: {
    backgroundColor: colors.yellowSoft,
  },
  badgeYellowText: {
    color: '#8A6A1A',
  },
  listCardMeta: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  listCardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  listCardBody: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 3,
  },
  placeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
