import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

type Props = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  tone?: 'cobalt' | 'pink' | 'yellow';
};

const toneMap = {
  cobalt: { bg: colors.cobalt, bgSoft: colors.cobaltSoft, text: colors.cobaltDark },
  pink: { bg: colors.pink, bgSoft: colors.pinkSoft, text: '#B94A79' },
  yellow: { bg: colors.yellow, bgSoft: colors.yellowSoft, text: '#8A6A1A' },
};

export default function Chip({ label, selected, onPress, tone = 'cobalt' }: Props) {
  const t = toneMap[tone];
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chip,
        { backgroundColor: selected ? t.bg : t.bgSoft },
      ]}
    >
      <Text style={[styles.label, { color: selected ? colors.white : t.text }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
    marginRight: spacing.sm,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
  },
});
