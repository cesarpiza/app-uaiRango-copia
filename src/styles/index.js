import { Dimensions } from "react-native"

const { width, height } = Dimensions.get('window');

const defaultSpacing = 10; // Configures the padding and borders of the items 
const screenWidth = width;
const screenHeight = height;
const headerHeight = screenHeight * 0.2;
const quantityOfItemsOnScreen = 5 // If the number here is 1, then an item will be visible on the screen
const itemHeight = ((height - headerHeight) / quantityOfItemsOnScreen) - defaultSpacing / quantityOfItemsOnScreen;
const white = '#ffffff';

export const Styles = {
    fontSize: {
        gg: width * 0.08,
        g: width * 0.06,
        m: width * 0.05,
        p: width * 0.04,
    },
    size: {
        screenWidth: screenWidth,
        screenHeight: screenHeight,
        headerHeight: headerHeight,
        item: {
            quantityOfItemsOnScreen: quantityOfItemsOnScreen,
            itemHeight: itemHeight,
        }
    },
    spacing: {
        defaultSpacing: defaultSpacing,
        borderRadius: 10,
    },
    color: {
        gray: '#CCCCCC',
        gray2: '#555555',
        white: white,
        black: '#000000',
        red: '#FF3B00',
        green: '#00994F',
        beige: '#EAE8DB',
        transparentBackground: 'rgba(0,0,0,0.6)',
    }
}