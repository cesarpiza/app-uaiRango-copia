import React, { useEffect, useState } from 'react';
import {
    Modal,
    SafeAreaView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles';
import { useProductContext } from '../../hooks/useProductContext';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheFirstLetterCapitalized } from '../../hooks/useTheFirstLetterCapitalized';
import { Styles } from '../../styles';
import { actions } from '../../context/productContext'

export default function ProductDetails({ route, navigation }) {

    const { state, dispatch } = useProductContext();
    const [showModal, setShowModal] = useState(false);

    //console.log(state.productsInCard);

    const {
        name,
        description,
        price,
    } = state.productDetails;

    const {
        quantity,
        observation,
    } = state;

    const { id } = route.params;

    useEffect(() => {
        dispatch({ type: actions.getProductDetailsById, id });
    }, []);

    let setPrice = '';
    if (price) {
        setPrice = (price).toFixed(2).replace(".", ",");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>
                    {description && useTheFirstLetterCapitalized(description)}
                </Text>
            </View>
            <View>
                <View style={styles.quantityAndAddNoteContainer}>
                    <View style={styles.quantityContainer}>
                        <Text style={styles.text}>{useTheFirstLetterCapitalized('quantity')}
                        </Text>
                        <View style={styles.quantityButtonContainer}>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={() => {
                                    dispatch({
                                        type: actions.decreaseQuantity,
                                    })
                                }}
                            >
                                <Text style={styles.quantityButtonText}>
                                    -
                                </Text>
                            </TouchableOpacity>
                            <TextInput
                                keyboardType='numeric'
                                style={styles.textInput}
                                value={String(quantity)}
                                onChangeText={text => dispatch({ type: 'onChangeText', text: (text).replace(/,/g, '').replace(/\./g, '') })}
                            />
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={() => {
                                    dispatch({
                                        type: actions.increaseQuantity,
                                    })
                                }}
                            >
                                <Text style={styles.quantityButtonText}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.addNoteContainer}
                        onPress={() => setShowModal(true)}
                    >
                        <MaterialIcons name="speaker-notes" size={24} color="black" />
                        <Text style={styles.text}>
                            {useTheFirstLetterCapitalized('add note')}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.cardButton}
                    onPress={() => {
                        dispatch({
                            type: actions.addProductInCard,
                        })
                        navigation.goBack();
                    }}
                >
                    <Text style={styles.carButtonText}>
                        {/* Only to exercise the custom hook - there was no need */}
                        {useTheFirstLetterCapitalized('adicionar ao carrinho')} <Text style={styles.price}>
                            (r$ {setPrice})
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={showModal}
            >
                {/* Para obter o comportamento desejado (fechando o modal ao clicar fora dele, mas não fechando-o ao clicar dentro), você pode fazer uso do componente do React Native. Esse componente permite que você manipule toques fora dos componentes filhos especificados. Tem que usar dois TouchableWithoutFeedback. Um no pai e um no filho */}
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
                                    observação
                                </Text>
                                <Text
                                    style={styles.modalSubTitle}
                                >
                                    adicione observação
                                </Text>
                                <TextInput
                                    style={styles.modalTextInput}
                                    value={observation.value}
                                    onChangeText={text => {
                                        dispatch({ type: actions.observationValue, text: text });
                                    }}
                                    placeholder='Qual sua observação?'
                                    placeholderTextColor={Styles.color.gray}
                                />
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
                                            dispatch({ type: actions.addObservation })
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