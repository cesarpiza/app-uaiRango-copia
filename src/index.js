import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
    StatusBar,
} from 'react-native';
import Home from './pages/home';
import ProductDetails from './pages/productDetails';
import ShoppingCart from './pages/shoppingCard';
import Header from './components/header';
import { Styles } from './styles';
import { ProductProvider } from './context/productContext';
import AnimatedCardToast from './components/animatedCardToast';

export default function App() {

    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <ProductProvider>
            <NavigationContainer>
                <StatusBar hidden />
                <Navigator>
                    <Screen
                        name='Home'
                        component={Home}
                        options={{
                            header: () => {
                                return <Header />
                            },
                        }}
                    />
                    <Screen
                        name='ProductDetails'
                        component={ProductDetails}
                        options={{
                            headerTitle: 'Product Details',
                            headerTintColor: Styles.color.white,
                            headerStyle: {
                                backgroundColor: Styles.color.red,
                            }
                        }}
                    />
                    <Screen
                        name='ShoppingCart'
                        component={ShoppingCart}
                        options={{
                            headerTitle: 'Shopping Cart',
                            headerTintColor: Styles.color.white,
                            headerStyle: {
                                backgroundColor: Styles.color.red,
                            }
                        }}
                    />
                </Navigator>
                <AnimatedCardToast />
            </NavigationContainer>
        </ProductProvider>
    );
}
