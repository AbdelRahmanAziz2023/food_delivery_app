import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import CustomButton from './CustomButton';
import { Images } from '../../constants/images';

interface CustomErrorProps {
    title: string;
    message: string;
    buttonTitle?: string;
    onPress?: () => void;
}

const CustomError = ({title, message, buttonTitle, onPress}: CustomErrorProps) => {
    return (
        <View style={styles.container}>
            <Images.error style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
            {/* <CustomButton
                title={buttonTitle}
                onPress={onPress}
                btnStyle={styles.button}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 3,
    width: '100%',
        height: 200,
    marginBottom: 20,
    marginTop: 20,
    },
    image: {
        width: 100,
        height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Sen-Bold',
        color: '#32343E',
        textAlign: 'center',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        fontFamily: 'Sen-Regular',
        color: '#676767',
        textAlign: 'center',
        marginBottom: 10,
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#FF7622',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 3,
        },
    buttonTitle: {
        fontSize: 16,
        fontFamily: 'Sen-Bold',
        color: '#fff',
    },
});

export default CustomError;
