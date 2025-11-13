import {
  Modal,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import CustomText from './CustomText';
import CustomButton from './CustomButton';

type Props = {
  visible: boolean;
  onClose?: () => void;
  title: string;
  message?: string;
  isLoading?: boolean;
};

const CustomAlert = ({
  visible,
  onClose,
  title,
  message,
  isLoading,
}: Props) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          <CustomText text={title} textStyle={styles.title} />
          {message && <CustomText text={message} textStyle={styles.message} />}

          {isLoading && <ActivityIndicator color={'#FF7622'} size="large" />}
          {onClose && (
            <CustomButton
              title="Ok"
              onPress={onClose}
              btnStyle={styles.button}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    width: '80%',
    minHeight: '22%',
    backgroundColor: '#fff',
    borderRadius: 12,
    gap: 10,
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Sen-Bold',
  },
  message: {
    textAlign: 'center',
    color: '#646982',
  },
  button: {
    width: '45%',
    height: 40,
  },
});

export default CustomAlert;
