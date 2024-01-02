import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
    },
    name: {
        paddingLeft: Styles.spacing.defaultSpacing * 1.2,
        paddingTop: Styles.spacing.defaultSpacing * 1.2,
        fontWeight: 'bold',
        color: Styles.color.red,
        textTransform: 'capitalize',
        fontSize: Styles.fontSize.g,
    },
    description: {
        paddingLeft: Styles.spacing.defaultSpacing * 1.2,
        fontSize: Styles.fontSize.p + 2,
    },
    quantityAndAddNoteContainer: {
        paddingTop: Styles.spacing.defaultSpacing * 2,
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: Styles.color.gray,
        paddingHorizontal: Styles.spacing.defaultSpacing * 1.2,
    },
    quantityContainer: {
        alignItems: 'center',
    },
    text: {
        fontSize: Styles.fontSize.p,
        marginBottom: Styles.spacing.defaultSpacing / 2,
    },
    quantityButtonContainer: {
        flexDirection: 'row',
        columnGap: Styles.spacing.defaultSpacing,
        alignItems: 'center',
    },
    quantityButton: {
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
    textInput: {
        width: Styles.size.screenWidth * 0.14,
        backgroundColor: Styles.color.beige,
        paddingVertical: Styles.spacing.defaultSpacing * 0.8,
        borderRadius: Styles.spacing.borderRadius,
        alignItems: 'center',
        backgroundColor: Styles.color.beige,
        textAlign: 'center',
    },
    addNoteContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardButton: {
        backgroundColor: Styles.color.green,
        height: Styles.size.screenHeight * 0.06,
        justifyContent: 'center',
        borderRadius: Styles.spacing.borderRadius,
        marginTop: Styles.spacing.defaultSpacing * 2,
        marginHorizontal: Styles.spacing.defaultSpacing * 1.2,
        marginBottom: Styles.spacing.defaultSpacing * 1.2,
    },
    carButtonText: {
        color: Styles.color.white,
        textAlign: 'center',
        fontSize: Styles.fontSize.p,
        fontWeight: 'bold',
    },
    price: {
        textTransform: 'capitalize',
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
        textTransform: 'capitalize',
        fontWeight: 'bold',
        marginBottom: Styles.spacing.defaultSpacing,
    },
    modalSubTitle: {
        fontSize: Styles.fontSize.p,
        textTransform: 'capitalize',
        marginBottom: Styles.spacing.defaultSpacing * 3,
    },
    modalTextInput: {
        width: '90%',
        backgroundColor: Styles.color.white,
        borderWidth: 1,
        borderColor: Styles.color.gray,
        padding: Styles.spacing.defaultSpacing * 0.7,
        borderRadius: Styles.spacing.borderRadius,
        fontSize: Styles.fontSize.p,
        marginBottom: Styles.spacing.defaultSpacing * 2,
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