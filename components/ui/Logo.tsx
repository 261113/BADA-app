import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '../../constants/theme';

type Props = {
  size?: number;
};

export default function Logo({ size = 96 }: Props) {
  return (
    <View
      style={[
        styles.badge,
        {
          width: size,
          height: size,
          borderRadius: radius.lg + size / 4,
        },
      ]}
    >
      <Text style={[styles.letter, { fontSize: size * 0.4 }]}>바다</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.cobalt,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.cobalt,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },
  letter: {
    color: colors.white,
    fontWeight: '800',
  },
});
