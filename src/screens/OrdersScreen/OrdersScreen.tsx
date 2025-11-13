import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import CustomText from '../../components/common/CustomText';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import firestore from '@react-native-firebase/firestore';
import IconButton from '../../components/common/IconButton';
import { Icons } from '../../constants/images';
import { SafeAreaView } from 'react-native-safe-area-context';

interface OrderItem {
  id: string;
  address: string;
  total: number;
  currency: string;
  status: string;
  createdAt: any;
  items?: any[];
}

const OrdersScreen = ({ navigation }: { navigation: any }) => {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!userId) return;

    setLoading(true);
    const unsubscribe = firestore()
      .collection('orders')
      .where('uId', '==', userId)
      .onSnapshot(
        snapshot => {
          const userOrders: OrderItem[] = snapshot.docs.map(
            doc => ({ id: doc.id, ...doc.data() } as OrderItem)
          );
          setOrders(userOrders);
          setLoading(false);
        },
        error => {
          console.error('Error fetching orders:', error);
          setLoading(false);
        },
      );

    return () => unsubscribe();
  }, [userId]);

  const renderOrder = ({ item }: { item: OrderItem }) => {
    const date = item.createdAt?.toDate?.()?.toLocaleString() || '';
    return (
      <View style={styles.orderCard}>
        <View style={styles.headerRow}>
          <CustomText text={`#${item.id.slice(0, 6).toUpperCase()}`} textStyle={styles.orderId} />
          <View style={[styles.statusBadge, getStatusBadgeStyle(item.status)]}>
            <CustomText text={item.status.toUpperCase()} textStyle={styles.statusText} />
          </View>
        </View>

        <CustomText
          text={`Total: ${item.total} ${item.currency}`}
          textStyle={styles.orderTotal}
        />
        <CustomText
          text={`Address: ${item.address}`}
          textStyle={styles.orderAddress}
        />
        <View style={styles.divider} />
        <CustomText text={`Placed on ${date}`} textStyle={styles.orderDate} />
      </View>
    );
  };

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case 'pending':
        return { backgroundColor: '#FFF4E0' };
      case 'completed':
        return { backgroundColor: '#E9F8EE' };
      case 'cancelled':
        return { backgroundColor: '#FFEAEA' };
      default:
        return { backgroundColor: '#EEE' };
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF7A00" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerLeft}>
          <IconButton Icon={Icons.back} onPress={() => navigation.goBack()} />
          <CustomText text="Orders" textStyle={styles.headerTitle} />
        </View>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={renderOrder}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <CustomText
            text="No orders yet."
            textStyle={styles.emptyText}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FB',
    padding:20,
  },
  listContent: {
    padding: 16,
    paddingBottom: 30,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9FB',
  },
  orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderId: {
    fontWeight: '600',
    fontSize: 15,
    color: '#333',
  },
  orderTotal: {
    fontSize: 14,
    color: '#222',
    fontWeight: '500',
    marginBottom: 4,
  },
  orderAddress: {
    fontSize: 13,
    color: '#555',
    marginBottom: 8,
    lineHeight: 18,
  },
  divider: {
    height: 1,
    backgroundColor: '#EFEFEF',
    marginVertical: 10,
  },
  orderDate: {
    fontSize: 12,
    color: '#999',
  },
  statusBadge: {
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 14,
    marginTop: 30,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  
    gap: 10,
  },
  headerTitle: {
    fontSize: 18,
  },
});

export default OrdersScreen;
