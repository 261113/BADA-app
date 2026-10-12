import { ImageBackground } from 'expo-image';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../constants/theme';

export default function LoadingScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home');
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/loading-background.jpg')}
      style={styles.container}
      contentFit="cover"
    >
      <View style={styles.logoWrap}>
        <Text style={styles.title}>BADA</Text>
        <Text style={styles.subtitle}>Breaking Artistic Divides for All</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoWrap: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 248, 236, 0.82)',
    borderRadius: radius.lg,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    marginBottom: spacing.xl * 2,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.cobalt,
    letterSpacing: 2,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
});
