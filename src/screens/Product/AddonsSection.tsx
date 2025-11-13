// AddonsSection.tsx
import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Addon } from '../../types/Product.type';
import CustomText from '../../components/common/CustomText';

type Props = {
  addons: Addon[];
  selectedAddons: string[];
  toggleAddon: (name: string) => void;
};

const AddonsSection = ({ addons, selectedAddons, toggleAddon }: Props) => {
  return (
    <View style={styles.addonsContainer}>
      <CustomText text="Available Add-ons" textStyle={styles.addonsTitle} />
      <View style={styles.addonsGrid}>
        {addons.map((addon, index) => {
          const isSelected = selectedAddons.includes(addon.name);
          return (
            <Pressable
              key={index}
              onPress={() => toggleAddon(addon.name)}
              style={[styles.addonPill, isSelected && styles.addonPillSelected]}
            >
              <Text
                style={[styles.addonPillText, isSelected && styles.addonPillTextSelected]}
              >
                {addon.name} (+{addon.price} EGP)
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default AddonsSection;

const styles = StyleSheet.create({
  addonsContainer: { marginTop: 18, borderTopWidth: 1, borderTopColor: '#EEE', paddingTop: 10 },
  addonsTitle: { fontSize: 18, fontWeight: '700', color: '#181C2E', marginBottom: 10 },
  addonsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  addonPill: { backgroundColor: '#F4F5F7', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 8 },
  addonPillSelected: { backgroundColor: '#EEA682' },
  addonPillText: { fontSize: 14, color: '#555' },
  addonPillTextSelected: { color: '#FFF', fontWeight: '600' },
});
