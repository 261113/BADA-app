import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/ui/Logo';
import WatercolorBackground from '../components/ui/WatercolorBackground';
import { colors } from '../constants/theme';

export default function LoadingScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home');
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <WatercolorBackground />
      <Logo size={104} />
      <Text style={styles.title}>BADA</Text>
      <Text style={styles.subtitle}>Breaking Artistic Divides for All</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 20,
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
