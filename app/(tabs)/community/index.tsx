import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Card, TopTabs } from '../../../components/ui';
import { colors, radius, spacing } from '../../../constants/theme';
import { boardTypes, posts } from '../../../data/mock';

export default function CommunityScreen() {
  const insets = useSafeAreaInsets();
  const [tab, setTab] = useState(0);

  const filtered = useMemo(() => posts.filter((p) => p.board === boardTypes[tab]), [tab]);

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + spacing.md }]}>
        <Text style={styles.title}>커뮤니티</Text>
        <TopTabs tabs={boardTypes as unknown as string[]} activeIndex={tab} onChange={setTab} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {filtered.map((post) => (
          <Pressable key={post.id} onPress={() => router.push(`/community/${post.id}`)}>
            <Card style={styles.postCard}>
              <View style={styles.postHeader}>
                <Text style={styles.author}>{post.author}</Text>
                <Text style={styles.time}>{post.createdAt}</Text>
              </View>
              <Text style={styles.postTitle} numberOfLines={1}>
                {post.title}
              </Text>
              <Text style={styles.postBody} numberOfLines={2}>
                {post.content}
              </Text>
              <View style={styles.periodRow}>
                <Ionicons name="time-outline" size={13} color={colors.cobalt} />
                <Text style={styles.periodText}>{post.period}</Text>
              </View>
            </Card>
          </Pressable>
        ))}
      </ScrollView>

      <Pressable style={styles.fab} onPress={() => router.push('/community/write')}>
        <Ionicons name="pencil" size={22} color={colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl * 2,
  },
  postCard: {
    marginBottom: spacing.md,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  author: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.cobalt,
  },
  time: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  postTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  postBody: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
    marginBottom: spacing.sm,
  },
  periodRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  periodText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.cobalt,
    marginLeft: 4,
  },
  fab: {
    position: 'absolute',
    right: spacing.lg,
    bottom: spacing.xl,
    width: 54,
    height: 54,
    borderRadius: radius.pill,
    backgroundColor: colors.cobalt,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.cobalt,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
});
