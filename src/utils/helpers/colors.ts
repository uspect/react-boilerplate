const baseColors = {
  white: '#FFFFFF',

  background: '#F5F5F5',

  textPrimary: '#212126',
  textSecondary: '#989FA6',
};

export const colors = { ...baseColors };
export type TColorName = keyof typeof colors;
