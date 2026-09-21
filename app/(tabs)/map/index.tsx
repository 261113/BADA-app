import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Chip from '../../../components/ui/Chip';
import { colors, radius, spacing } from '../../../constants/theme';
import { categories, mapPlaces } from '../../../data/mock';

export default function MapScreen() {
  const insets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const premiumPlaces = mapPlaces.filter((p) => p.premium);

  return (
    <View style={styles.container}>
      <View style={[styles.searchArea, { paddingTop: insets.top + spacing.md }]}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color={colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="장소, 공간을 검색해보세요"
            placeholderTextColor={colors.textSecondary}
            value={query}
            onChangeText={setQuery}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipScroll}
        >
          <Chip
            label="전체"
            selected={selectedCategory === null}
            onPress={() => setSelectedCategory(null)}
          />
          {categories.map((category) => (
            <Chip
              key={category.id}
              label={category.label}
              selected={selectedCategory === category.id}
              onPress={() => setSelectedCategory(category.id)}
              tone="pink"
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.mapArea}>
        <Ionicons name="map-outline" size={40} color={colors.cobalt} />
        <Text style={styles.mapText}>지도가 표시될 영역이에요</Text>
        <Text style={styles.mapSubText}>실제 지도 연동은 추후 추가될 예정입니다</Text>
      </View>

      <View style={styles.premiumArea}>
        <Text style={styles.premiumTitle}>프리미엄 즐겨찾기</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipScroll}
        >
          {premiumPlaces.map((place) => (
            <Chip key={place.id} label={`★ ${place.name}`} tone="yellow" />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  searchArea: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchInput: {
    flex: 1,
    marginLeft: spacing.sm,
    fontSize: 14,
    color: colors.textPrimary,
  },
  chipScroll: {
    paddingRight: spacing.lg,
  },
  mapArea: {
    flex: 1,
    marginHorizontal: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.cobaltSoft,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  mapText: {
    marginTop: spacing.sm,
    fontSize: 14,
    fontWeight: '700',
    color: colors.cobaltDark,
  },
  mapSubText: {
    marginTop: 4,
    fontSize: 12,
    color: colors.textSecondary,
  },
  premiumArea: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  premiumTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
});
