import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { colors, radius, shadow, spacing } from '../constants/theme';

type CardProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Card({ children, style }: CardProps) {
  return <View style={[cardStyles.card, style]}>{children}</View>;
}

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.md,
    ...shadow.card,
  },
});

type ChipProps = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  tone?: 'cobalt' | 'pink' | 'yellow';
};

const chipToneMap = {
  cobalt: { bg: colors.cobalt, bgSoft: colors.cobaltSoft, text: colors.cobaltDark },
  pink: { bg: colors.pink, bgSoft: colors.pinkSoft, text: '#B94A79' },
  yellow: { bg: colors.yellow, bgSoft: colors.yellowSoft, text: '#8A6A1A' },
};

export function Chip({ label, selected, onPress, tone = 'cobalt' }: ChipProps) {
  const t = chipToneMap[tone];
  return (
    <Pressable onPress={onPress} style={[chipStyles.chip, { backgroundColor: selected ? t.bg : t.bgSoft }]}>
      <Text style={[chipStyles.label, { color: selected ? colors.white : t.text }]}>{label}</Text>
    </Pressable>
  );
}

const chipStyles = StyleSheet.create({
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

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  onPressAction?: () => void;
};

export function SectionHeader({ title, actionLabel, onPressAction }: SectionHeaderProps) {
  return (
    <View style={sectionHeaderStyles.row}>
      <Text style={sectionHeaderStyles.title}>{title}</Text>
      {actionLabel ? (
        <Pressable onPress={onPressAction} hitSlop={8}>
          <Text style={sectionHeaderStyles.action}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const sectionHeaderStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  action: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
});

type StubScreenProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
};

export function StubScreen({ icon, title, description }: StubScreenProps) {
  return (
    <View style={stubStyles.container}>
      <View style={stubStyles.iconCircle}>
        <Ionicons name={icon} size={30} color={colors.cobalt} />
      </View>
      <Text style={stubStyles.title}>{title}</Text>
      <Text style={stubStyles.description}>{description}</Text>
    </View>
  );
}

const stubStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: radius.lg,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

type TopTabsProps = {
  tabs: string[];
  activeIndex: number;
  onChange: (index: number) => void;
};

export function TopTabs({ tabs, activeIndex, onChange }: TopTabsProps) {
  return (
    <View style={topTabsStyles.wrap}>
      {tabs.map((tab, index) => {
        const active = index === activeIndex;
        return (
          <Pressable key={tab} style={topTabsStyles.tabItem} onPress={() => onChange(index)}>
            <Text style={[topTabsStyles.label, active && topTabsStyles.labelActive]}>{tab}</Text>
            <View style={[topTabsStyles.underline, active && topTabsStyles.underlineActive]} />
          </Pressable>
        );
      })}
    </View>
  );
}

const topTabsStyles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: radius.pill,
    padding: 4,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  labelActive: {
    color: colors.cobalt,
  },
  underline: {
    marginTop: 6,
    height: 3,
    width: 28,
    borderRadius: radius.pill,
    backgroundColor: 'transparent',
  },
  underlineActive: {
    backgroundColor: colors.cobalt,
  },
});

type WatercolorBackgroundProps = {
  variant?: 'full' | 'header';
};

export function WatercolorBackground({ variant = 'full' }: WatercolorBackgroundProps) {
  const height = variant === 'full' ? '100%' : 260;

  return (
    <View style={[StyleSheet.absoluteFill, { height, overflow: 'hidden' }]} pointerEvents="none">
      <Svg width="100%" height="100%" viewBox="0 0 400 700" preserveAspectRatio="xMidYMid slice">
        <Circle cx="60" cy="90" r="140" fill={colors.pink} opacity={0.16} />
        <Circle cx="120" cy="60" r="90" fill={colors.yellow} opacity={0.18} />
        <Circle cx="340" cy="40" r="120" fill={colors.cobalt} opacity={0.1} />
        <Circle cx="380" cy="220" r="90" fill={colors.pink} opacity={0.12} />
        <Circle cx="30" cy="320" r="100" fill={colors.yellow} opacity={0.12} />
        <Circle cx="200" cy="640" r="160" fill={colors.cobalt} opacity={0.08} />
        <Circle cx="370" cy="600" r="110" fill={colors.pink} opacity={0.1} />
      </Svg>
    </View>
  );
}
