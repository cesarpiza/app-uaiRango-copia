import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Styles } from '../../styles';

export default function Header() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>salgadinhos do tião</Text>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        height: Styles.size.headerHeight,
        backgroundColor: Styles.color.red,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: Styles.fontSize.gg,
        color: Styles.color.white,
    }
});