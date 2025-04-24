// components/Tag.tsx
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Tag({ label }: { label: string }) {
  return (
    <LinearGradient
      colors={['#8e44ad', '#3498db']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <Text style={styles.text}>{label}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
