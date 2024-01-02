import React, { useCallback, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { actions } from '../../context/productContext';
import { Styles } from '../../styles';
import { useProductContext } from '../../hooks/useProductContext';
import { useFocusEffect } from '@react-navigation/native';
import CardToast from '../../components/cardToast';

export default function Home({ navigation }) {

    const { state, dispatch } = useProductContext();
    const { productData } = state;

    useFocusEffect(
        useCallback(() => {
            dispatch({ type: actions.resetQuantityAndObservation })
            dispatch({ type: actions.getTotal })
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingVertical: Styles.spacing.defaultSpacing / 2,
                    backgroundColor: Styles.color.beige,
                    paddingBottom: state.total !== 0 && Styles.size.screenHeight * 0.07,
                }}
                data={productData}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => {

                    const price = (item.price).toFixed(2).replace(".", ",");

                    return (
                        <TouchableOpacity
                            style={styles.productContainer}
                            onPress={() => {
                                navigation.navigate('ProductDetails', { id: item.id });
                            }}
                        >
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>r$ {price}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <CardToast navigation={navigation} />
        </SafeAreaView>
    );
}