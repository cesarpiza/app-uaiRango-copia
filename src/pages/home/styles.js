import { StyleSheet } from 'react-native';
import { Styles } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    productContainer: {
        backgroundColor: Styles.color.white,
        height: Styles.size.item.itemHeight - Styles.spacing.defaultSpacing,
        justifyContent: 'center',
        paddingLeft: Styles.spacing.defaultSpacing,
        borderColor: Styles.color.beige,
        
        marginTop: Styles.spacing.defaultSpacing / 2,
        marginBottom: Styles.spacing.defaultSpacing / 2,
    },
    name: {
        fontSize: Styles.fontSize.m,
        textTransform: 'capitalize',
        fontWeight: 'bold',
    },
    price: {
        fontSize: Styles.fontSize.m,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: Styles.color.green,
    },
});