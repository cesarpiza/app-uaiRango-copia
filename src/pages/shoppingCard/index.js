import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {
    Alert,
    Modal,
    SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View,
} from 'react-native';
import { styles } from './styles';
import { useProductContext } from '../../hooks/useProductContext';
import { useTheFirstLetterCapitalized } from '../../hooks/useTheFirstLetterCapitalized';
import { Styles } from '../../styles';
import { actions } from '../../context/productContext';

export default function ShoppingCart({ navigation }) {

    const { state, dispatch } = useProductContext();
    const [showModal, setShowModal] = useState(false);
    const [currentQuantity, setCurrentQuantity] = useState({
        value: 0,
        index: 0,
    });
    const total = state.total.toFixed(2).replace('.', ',');
    const { productsInCard } = state;

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={styles.shoppingCardContainer}
            >
                <MaterialCommunityIcons name="silverware-fork-knife" size={Styles.fontSize.p - 1} color={Styles.color.red} />
                <Text
                    style={styles.shoppingCard}
                >
                    carrinho de compras
                </Text>
            </View>
            <Text
                style={styles.title}
            >
                salgadinhos do tião
            </Text>
            {state.total === 0 &&
                <View style={{
                    alignSelf: 'center',
                    marginTop: Styles.spacing.defaultSpacing * 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: Styles.spacing.defaultSpacing,
                }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: Styles.fontSize.gg,
                            color: Styles.color.red,
                        }}
                    >
                        Sem items
                    </Text>
                    <MaterialCommunityIcons name="emoticon-sad-outline" size={Styles.fontSize.gg * 1.5} color={Styles.color.red} />
                </View>
            }
            {productsInCard.map((product, index) => {

                const price = product.price.toFixed(2).replace('.', ',');

                return (
                    <View key={String(index)}>
                        <View style={styles.mainContainer}>
                            <View
                                style={styles.qAndNameContainer}
                            >
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => {
                                        setShowModal(true);
                                        setCurrentQuantity({
                                            value: state.productsInCard[index].quantity,
                                            index: index
                                        })
                                    }}
                                >
                                    <Text
                                        style={styles.quantity}>
                                        {product.quantity}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (!product.observation) return;
                                        Alert.alert('Observation', `${product.observation.value}`)
                                    }}
                                >
                                    <Text
                                        style={styles.name}
                                    >
                                        {product.name}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={styles.pAndCContainer}
                            >
                                <Text style={styles.price}
                                >
                                    r$ {price}
                                </Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        dispatch({
                                            type: actions.removeItemFromProductsInCard,
                                            id: index,
                                        })

                                    }}
                                >
                                    <AntDesign name="closecircle" size={Styles.fontSize.p} color={Styles.color.red} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
            })}
            <TouchableOpacity
                style={styles.addItemsButton}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Text
                    style={styles.addItems}
                >
                    {useTheFirstLetterCapitalized('adicionar mais itens')}
                </Text>
                <MaterialCommunityIcons name="shopping-outline" size={Styles.fontSize.p + 2} color={Styles.color.red} />
            </TouchableOpacity>
            <View style={styles.mainFinalizeOrderContainer}>
                <Text
                    style={styles.text}
                >
                    total: <Text style={styles.total}>
                        r$: {total}
                    </Text>
                </Text>
                <TouchableOpacity onPress={() => { }}>
                    <View
                        style={styles.finalizeOrderContainer}
                    >
                        <Text
                            style={styles.finalizeOrderText}
                        >
                            {useTheFirstLetterCapitalized('finalizar pedido')}
                        </Text>
                        <Feather name="check-circle" size={Styles.fontSize.m} color={Styles.color.white} />
                    </View>
                </TouchableOpacity>
            </View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={showModal}
            >
                <TouchableWithoutFeedback
                    onPress={() => setShowModal(false)}
                >
                    <View
                        style={styles.modalContainer}
                    >
                        <TouchableWithoutFeedback>
                            <View
                                style={styles.modalBox}
                            >
                                <Text
                                    style={styles.modalTitle}
                                >
                                    {useTheFirstLetterCapitalized('selecione a quantidade')}
                                </Text>
                                <View style={styles.quantityButtonContainer}>
                                    <TouchableOpacity
                                        style={styles.sCardQuantityButton}
                                        onPress={() => {
                                            setCurrentQuantity(prev => {
                                                if (prev.value > 1) {
                                                    return {
                                                        ...prev,
                                                        value: prev.value - 1
                                                    }
                                                } else {
                                                    return {
                                                        ...prev,
                                                    }
                                                }
                                            });
                                        }}
                                    >
                                        <Text style={styles.quantityButtonText}>
                                            -
                                        </Text>
                                    </TouchableOpacity>
                                    <TextInput
                                        keyboardType='numeric'
                                        style={styles.textInput}
                                        value={String(currentQuantity.value)}
                                        onChangeText={text =>
                                            setCurrentQuantity(prev => {
                                                if (text < 1) {
                                                    return {
                                                        ...prev,
                                                        value: 1,
                                                    }
                                                } else if (text > 100) {
                                                    return {
                                                        ...prev,
                                                        value: 100,
                                                    }
                                                } else {
                                                    return {
                                                        ...prev,
                                                        value: Number(text),
                                                    }
                                                }
                                            })}
                                    />
                                    <TouchableOpacity
                                        style={styles.sCardQuantityButton}
                                        onPress={() => {
                                            setCurrentQuantity(prev => {
                                                if (prev.value >= 100) {
                                                    return {
                                                        ...prev,
                                                        value: 100,
                                                    }
                                                } else {
                                                    return {
                                                        ...prev,
                                                        value: prev.value + 1
                                                    }
                                                }
                                            })
                                        }}
                                    >
                                        <Text style={styles.quantityButtonText}>
                                            +
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.modalButtonContainer}>
                                    <TouchableOpacity
                                        style={[styles.modalButton, {
                                            borderRightWidth: 1,
                                            borderColor: Styles.color.gray,
                                        }]}
                                        onPress={() => {
                                            dispatch({ type: actions.cancelObservation })
                                            setShowModal(false);
                                        }}
                                    >
                                        <Text
                                            style={styles.modalButtonText}>
                                            cancelar
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.modalButton}
                                        onPress={() => {
                                            dispatch({
                                                type: actions.setCurrentQuantity,
                                                currentQuantity: currentQuantity.value,
                                                index: currentQuantity.index
                                            })
                                            setShowModal(false)
                                        }}
                                    >
                                        <Text
                                            style={styles.modalButtonText}>
                                            confirmar
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </SafeAreaView>
    );
}