import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Styles } from '../../styles';
import { useTheFirstLetterCapitalized } from '../../hooks/useTheFirstLetterCapitalized';
import { useProductContext } from '../../hooks/useProductContext';
import Animated, {
    withTiming,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';
import { actions } from '../../context/productContext';

export default function AnimatedCardToast() {

    const { state, dispatch } = useProductContext();
    const animatedValue = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(animatedValue.value,
                        [0, 1],
                        [Styles.size.screenHeight * 0.07, 0],
                    )
                }
            ]
        }
    });

    useEffect(() => {
        if (state.showAnimatedCardToast) {
            animatedValue.value = withTiming(1);
            setTimeout(() => {
                dispatch({ type: actions.changeAnimatedCardToastValue })
            }, 1.5 * 1000);
        } else {
            animatedValue.value = withTiming(0);
        }
    }, [state.showAnimatedCardToast]);

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <Text style={styles.text}>{useTheFirstLetterCapitalized('produto adicionado com sucesso!')}</Text>
        </Animated.View>
    );
}

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Styles.color.gray2,
        flexDirection: 'row',
        columnGap: Styles.spacing.defaultSpacing,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: Styles.spacing.borderRadius * 6,
        borderTopRightRadius: Styles.spacing.borderRadius * 6,
        position: 'absolute',
        height: Styles.size.screenHeight * 0.07,
        bottom: 0,
    },
    text: {
        fontWeight: 'bold',
        fontSize: Styles.fontSize.p,
        color: Styles.color.white,
    },
});