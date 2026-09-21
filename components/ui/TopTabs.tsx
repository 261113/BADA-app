import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../../constants/theme';

type Props = {
  tabs: string[];
  activeIndex: number;
  onChange: (index: number) => void;
};

export default function TopTabs({ tabs, activeIndex, onChange }: Props) {
  return (
    <View style={styles.wrap}>
      {tabs.map((tab, index) => {
        const active = index === activeIndex;
        return (
          <Pressable key={tab} style={styles.tabItem} onPress={() => onChange(index)}>
            <Text style={[styles.label, active && styles.labelActive]}>{tab}</Text>
            <View style={[styles.underline, active && styles.underlineActive]} />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
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
