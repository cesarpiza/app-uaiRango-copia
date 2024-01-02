import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: Styles.spacing.defaultSpacing * 2,
        paddingTop: Styles.size.screenHeight * 0.05 + Styles.spacing.defaultSpacing,
    },
    shoppingCardContainer: {
        position: 'absolute',
        width: Styles.size.screenWidth,
        justifyContent: 'center',
        height: Styles.size.screenHeight * 0.05,
        flexDirection: 'row',
        columnGap: Styles.spacing.defaultSpacing,
        backgroundColor: Styles.color.beige,
        alignItems: 'center',
    },
    shoppingCard: {
        textTransform: 'uppercase',
        color: Styles.color.red,
        fontWeight: 'bold',
        fontSize: Styles.fontSize.p - 3,
    },
    title: {
        fontSize: Styles.fontSize.g,
        fontWeight: 'bold',
        color: Styles.color.red,
        textTransform: 'capitalize',
        textAlign: 'center',
        marginBottom: Styles.spacing.defaultSpacing * 1.5,
    },
    mainContainer: {
        marginBottom: Styles.spacing.defaultSpacing * 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    qAndNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: Styles.spacing.defaultSpacing,
    },
    quantityButton: {
        backgroundColor: Styles.color.gray,
        width: Styles.size.screenWidth * 0.1,
        height: Styles.size.screenWidth * 0.08,
        borderRadius: Styles.spacing.borderRadius * 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantity: {
        fontSize: Styles.fontSize.p,
    },
    name: {
        fontSize: Styles.fontSize.p,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: Styles.color.red,
    },
    pAndCContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: Styles.spacing.defaultSpacing,
    },
    price: {
        fontSize: Styles.fontSize.p,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: Styles.color.green,
    },
    button: {

    },
    observation: {},
    addItemsButton: {
        position: 'absolute',
        bottom: Styles.size.screenHeight * 0.07 + Styles.spacing.defaultSpacing * 2,
        borderWidth: 1,
        borderColor: Styles.color.red,
        alignSelf: 'center',
        paddingVertical: Styles.spacing.defaultSpacing * 0.5,
        paddingHorizontal: Styles.spacing.defaultSpacing,
        borderRadius: Styles.spacing.borderRadius / 2,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: Styles.spacing.defaultSpacing,
    },
    addItems: {
        color: Styles.color.red,
        fontSize: Styles.fontSize.p,
    },
    mainFinalizeOrderContainer: {
        position: 'absolute',
        width: Styles.size.screenWidth,
        bottom: 0,
        height: Styles.size.screenHeight * 0.07,
        backgroundColor: Styles.color.green,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Styles.spacing.defaultSpacing * 2,
    },
    text: {
        color: Styles.color.white,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: Styles.fontSize.p,
    },
    finalizeOrderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: Styles.spacing.defaultSpacing,
        borderWidth: 1,
        borderColor: Styles.color.white,
        paddingVertical: Styles.spacing.defaultSpacing * 0.5,
        paddingHorizontal: Styles.spacing.defaultSpacing,
        borderRadius: Styles.spacing.borderRadius / 2,
    },
    finalizeOrderText: {
        color: Styles.color.white,
        fontSize: Styles.fontSize.p,
    },
    modalContainer: {
        backgroundColor: Styles.color.transparentBackground,
        height: Styles.size.screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Styles.spacing.defaultSpacing * 4,
    },
    modalBox: {
        paddingVertical: Styles.spacing.defaultSpacing,
        paddingBottom: 0,
        width: '100%',
        backgroundColor: Styles.color.white,
        alignItems: 'center',
        borderRadius: Styles.spacing.borderRadius,
    },
    modalTitle: {
        fontSize: Styles.fontSize.p,
        fontWeight: 'bold',
        marginBottom: Styles.spacing.defaultSpacing * 2,
    },
    quantityButtonContainer: {
        flexDirection: 'row',
        columnGap: Styles.spacing.defaultSpacing,
        alignItems: 'center',
        marginBottom: Styles.spacing.defaultSpacing * 2,
    },
    textInput: {
        width: Styles.size.screenWidth * 0.14,
        backgroundColor: Styles.color.beige,
        paddingVertical: Styles.spacing.defaultSpacing * 0.8,
        borderRadius: Styles.spacing.borderRadius,
        alignItems: 'center',
        backgroundColor: Styles.color.beige,
        textAlign: 'center',
    },
    sCardQuantityButton: {
        width: Styles.size.screenHeight * 0.035,
        height: Styles.size.screenHeight * 0.035,
        backgroundColor: Styles.color.red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
    },
    quantityButtonText: {
        fontSize: Styles.fontSize.m,
        color: Styles.color.white,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: Styles.color.gray,
    },
    modalButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: Styles.spacing.defaultSpacing,
    },
    modalButtonText: {
        color: Styles.color.red,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: Styles.fontSize.p,
    },
}); 