import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import CustomText from '../../components/common/CustomText';
import PlusMinusButtons from '../../components/common/PlusMinusButtons';
import IconButton from '../../components/common/IconButton';
import { Icons } from '../../constants/images';
import { CartItem as CartItemType } from '../../store/slices/CartSlice';

interface Props {
  item: CartItemType;
  editMode: boolean;
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartItem = ({
  item,
  editMode,
  onRemove,
  onIncrease,
  onDecrease,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View style={styles.info}>
          <CustomText text={item.name} textStyle={styles.name} />

          {item.selectedAddons.length > 0 && (
            <View style={styles.addons}>
              {item.selectedAddons.map(a => (
                <CustomText
                  key={a.name}
                  text={`+ ${a.name} `}
                  textStyle={styles.addonText}
                />
              ))}
            </View>
          )}
          <CustomText
            text={`Total: ${item.totalPrice} EGP`}
            textStyle={styles.price}
          />
        </View>

        <View style={styles.controls}>
          <PlusMinusButtons
            value={item.quantity}
            onChange={val => {
              if (val > item.quantity) onIncrease();
              else onDecrease();
            }}
          />
          {editMode && (
            <IconButton
              Icon={Icons.cross}
              style={styles.delete}
              onPress={onRemove}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    marginHorizontal: 10,
    borderRadius: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {
    minWidth: 100,
    minHeight: 100,
    borderRadius: 12,
    marginRight: 12,
  },
  info: {
    flex: 1,
    paddingVertical: 5,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  addons: {
    marginTop: 4,
  },
  addonText: {
    color: '#A0A5BA',
    fontSize: 12,
  },
  controls: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    margin: 5,
  },
  price: {
    color: '#FF7A00',
    fontSize: 16,
  },
  delete: {
    backgroundColor: 'red',
    width: 30,
    height: 30,
    borderRadius: 30,
    marginBottom: 1,
  },
});
