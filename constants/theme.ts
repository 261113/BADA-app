export const colors = {
  cream: '#FFF8EC',
  creamDeep: '#FBEEd4',
  cobalt: '#2A4BD8',
  cobaltDark: '#17318F',
  cobaltSoft: '#E7ECFB',
  pink: '#FF9EC4',
  pinkSoft: '#FFE3EF',
  yellow: '#FFCE54',
  yellowSoft: '#FFF3D6',
  white: '#FFFFFF',
  textPrimary: '#2E2A22',
  textSecondary: '#928A79',
  textInverse: '#FFFFFF',
  border: '#F0E4CC',
  tabInactive: '#C3BBA9',
} as const;

export const radius = {
  sm: 12,
  md: 18,
  lg: 26,
  pill: 999,
} as const;

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 22,
  xl: 30,
} as const;

export const shadow = {
  card: {
    shadowColor: '#8A6A3D',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 3,
  },
} as const;

export const fonts = {
  title: { fontSize: 22, fontWeight: '800' as const, color: colors.textPrimary },
  heading: { fontSize: 17, fontWeight: '700' as const, color: colors.textPrimary },
  body: { fontSize: 14, fontWeight: '400' as const, color: colors.textPrimary },
  caption: { fontSize: 12, fontWeight: '500' as const, color: colors.textSecondary },
};
