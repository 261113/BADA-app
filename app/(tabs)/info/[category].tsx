import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../../../components/ui/Card';
import Chip from '../../../components/ui/Chip';
import { colors, spacing } from '../../../constants/theme';
import { categories, infoItems, infoTypes } from '../../../data/mock';

export default function InfoCategoryScreen() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const categoryInfo = categories.find((c) => c.id === category);
  const items = useMemo(
    () =>
      infoItems.filter(
        (item) => item.categoryId === category && (!typeFilter || item.type === typeFilter)
      ),
    [category, typeFilter]
  );

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: categoryInfo?.label ?? '분야별 정보' }} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.filterRow}>
          <Chip label="전체" selected={typeFilter === null} onPress={() => setTypeFilter(null)} />
          {infoTypes.map((type) => (
            <Chip
              key={type}
              label={type}
              selected={typeFilter === type}
              onPress={() => setTypeFilter(type)}
            />
          ))}
        </View>

        {items.length === 0 ? (
          <View style={styles.empty}>
            <Ionicons name="file-tray-outline" size={36} color={colors.textSecondary} />
            <Text style={styles.emptyText}>아직 등록된 소식이 없어요</Text>
          </View>
        ) : (
          items.map((item) => {
            const isFavorite = favorites.includes(item.id);
            return (
              <Card key={item.id} style={styles.itemCard}>
                <View style={styles.itemHeader}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.type}</Text>
                  </View>
                  <Pressable onPress={() => toggleFavorite(item.id)} hitSlop={8}>
                    <Ionicons
                      name={isFavorite ? 'heart' : 'heart-outline'}
                      size={20}
                      color={isFavorite ? colors.pink : colors.textSecondary}
                    />
                  </Pressable>
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <View style={styles.itemRow}>
                  <Ionicons name="location-outline" size={13} color={colors.textSecondary} />
                  <Text style={styles.itemMeta}>{item.place}</Text>
                </View>
                <View style={styles.itemRow}>
                  <Ionicons name="calendar-outline" size={13} color={colors.textSecondary} />
                  <Text style={styles.itemMeta}>{item.period}</Text>
                </View>
              </Card>
            );
          })
        )}
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
    padding: spacing.lg,
    paddingBottom: spacing.xl,
  },
  filterRow: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  itemCard: {
    marginBottom: spacing.md,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  badge: {
    backgroundColor: colors.cobaltSoft,
    borderRadius: 999,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.cobaltDark,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  itemMeta: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  empty: {
    alignItems: 'center',
    paddingVertical: spacing.xl * 2,
  },
  emptyText: {
    marginTop: spacing.sm,
    fontSize: 13,
    color: colors.textSecondary,
  },
});
