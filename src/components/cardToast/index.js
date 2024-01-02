import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Styles } from '../../styles';
import { useTheFirstLetterCapitalized } from '../../hooks/useTheFirstLetterCapitalized';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useProductContext } from '../../hooks/useProductContext';

export default function CardToast({ navigation }) {

    const { state } = useProductContext();

    return (
        <TouchableOpacity
            style={[styles.container, {
                transform: [
                    { translateY: state.total > 0 ? - Styles.size.screenHeight * 0.07 : 0 }
                ]
            }]}
            onPress={() => {
                navigation.navigate('ShoppingCart');
            }}
        >
            <MaterialCommunityIcons name="silverware-fork-knife" size={24} color={Styles.color.white} />
            <Text style={styles.text}>{useTheFirstLetterCapitalized('ver meu pedido')} <Text style={styles.total}>
                (r$ {state.total.toFixed(2)})
            </Text>
            </Text>
        </TouchableOpacity>
    );
}

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Styles.color.green,
        flexDirection: 'row',
        columnGap: Styles.spacing.defaultSpacing,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: Styles.spacing.borderRadius * 6,
        borderTopRightRadius: Styles.spacing.borderRadius * 6,
        position: 'absolute',
        height: Styles.size.screenHeight * 0.07,
        bottom: -Styles.size.screenHeight * 0.07,
    },
    text: {
        fontWeight: 'bold',
        fontSize: Styles.fontSize.p,
        color: Styles.color.white,
    },
    total: {
        textTransform: 'capitalize',
    }
});