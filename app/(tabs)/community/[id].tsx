import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../../../components/ui/Card';
import { colors, radius, spacing } from '../../../constants/theme';
import { posts } from '../../../data/mock';

export default function CommunityDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>게시글을 찾을 수 없어요.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{post.board}</Text>
        </View>
        <Text style={styles.title}>{post.title}</Text>

        <View style={styles.authorRow}>
          <View style={styles.avatar} />
          <View>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.time}>{post.createdAt}</Text>
          </View>
        </View>

        <Card style={styles.periodCard}>
          <Ionicons name="time-outline" size={16} color={colors.cobalt} />
          <View style={{ marginLeft: spacing.sm }}>
            <Text style={styles.periodLabel}>거래·모임 기간</Text>
            <Text style={styles.periodValue}>{post.period}</Text>
          </View>
        </Card>

        <Text style={styles.body}>{post.content}</Text>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable
          style={styles.chatButton}
          onPress={() => Alert.alert('채팅 시작', '채팅 기능은 준비 중이에요.')}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={18} color={colors.white} />
          <Text style={styles.chatButtonText}>채팅하기</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xl * 3,
  },
  notFound: {
    marginTop: spacing.xl,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.cobaltSoft,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    marginBottom: spacing.sm,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.cobaltDark,
  },
  title: {
    fontSize: 19,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: radius.pill,
    backgroundColor: colors.pinkSoft,
    marginRight: spacing.sm,
  },
  author: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  time: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  periodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.cobaltSoft,
    marginBottom: spacing.lg,
  },
  periodLabel: {
    fontSize: 11,
    color: colors.cobaltDark,
    marginBottom: 2,
  },
  periodValue: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.cobaltDark,
  },
  body: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.textPrimary,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: spacing.lg,
    backgroundColor: colors.cream,
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cobalt,
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
  },
  chatButtonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15,
    marginLeft: spacing.xs,
  },
});
