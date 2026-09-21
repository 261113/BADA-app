import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { colors } from '../../constants/theme';

type Props = {
  variant?: 'full' | 'header';
};

export default function WatercolorBackground({ variant = 'full' }: Props) {
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
