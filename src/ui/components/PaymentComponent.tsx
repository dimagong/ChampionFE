import React, {useEffect, useState} from 'react'
import {View, Platform, Button, Alert, Text, StyleSheet} from 'react-native'
import {
    CardField,
    useConfirmPayment,
    useStripe,
} from '@stripe/stripe-react-native'
import {Screen} from 'react-native-screens'
import {implementPaymentSheet} from '@data/api/services'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useSelector} from 'react-redux'
import {selectNextMatch} from '@store/selectors'
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import {theme} from '../theme/theme'
import {useTheme} from 'react-native-paper'

export const PaymentComponent = () => {
    const {initPaymentSheet, presentPaymentSheet} = useStripe()
    const [loading, setLoading] = useState(false)
    const [isSuccessPayment, setSuccessPayment] = useState(false)
    const {deviceHeight, colors} = useTheme<typeof theme>()

    const nextMatch = useSelector(selectNextMatch)
    console.log('nextMatch====', nextMatch)
    // {"teamGuest": "ŠK Belá", "teamHome": "TJ Družstevník Liptovská Štiavnica", "time": "9/28/24, 15:00"}
    //TEAM_NAME_OFFICIAL
    const amountPayment = 200

    const fetchPaymentSheetParams = async () => {
        const response = await implementPaymentSheet({amount: amountPayment})

        const {paymentIntent, ephemeralKey, customer} = response

        return {
            paymentIntent,
            ephemeralKey,
            customer,
        }
    }

    const initializePaymentSheet = async () => {
        const {paymentIntent, ephemeralKey, customer} =
            await fetchPaymentSheetParams()

        const {error} = await initPaymentSheet({
            merchantDisplayName: 'Example, Inc.',
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: paymentIntent,
            // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
            //methods that complete payment after a delay, like SEPA Debit and Sofort.
            allowsDelayedPaymentMethods: true,
            defaultBillingDetails: {
                name: 'No name',
            },
        })
        if (!error) {
            setLoading(true)
        }
    }

    const openPaymentSheet = async () => {
        const {error} = await presentPaymentSheet()

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message)
        } else {
            setSuccessPayment(true)
            Alert.alert('Success', 'Your order is confirmed!')
        }
    }

    useEffect(() => {
        initializePaymentSheet()
    }, [])

    console.log('loading=====', loading)
    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.container__title}>
                    {!isSuccessPayment
                        ? ' Buy a ticket for the match'
                        : ' The ticket was successfully paid for'}
                </Text>
                <View style={styles.container__subtitle}>
                    <Text style={styles.subtitle__content}>
                        {' '}
                        {nextMatch.teamHome}
                    </Text>
                    <View style={styles.subtitle__wrapper}>
                        <IconCommunity
                            name="resistor"
                            size={35}
                            color={colors.primaryRed}
                        />
                        <Text style={styles.subtitle__content}> VS</Text>
                        <IconCommunity
                            name="resistor"
                            size={35}
                            color={colors.primaryRed}
                        />
                    </View>
                    <Text style={styles.subtitle__content}>
                        {' '}
                        {nextMatch.teamGuest}
                    </Text>
                </View>
                {isSuccessPayment ? (
                    <>
                        <View style={styles.container__confirmation}>
                            <Text style={styles.content__confirmation}>
                                Payment confirmation code:
                            </Text>
                            <Text style={styles.content__confirmation}>
                                {'000001'}
                            </Text>
                        </View>
                    </>
                ) : (
                    <>
                        <View style={styles.container__content}>
                            <Text style={styles.content__price}> Price:</Text>
                            <Text style={styles.content__price}> 2</Text>
                            <Icon name="euro" style={styles.content__icon} />
                        </View>

                        <View style={styles.container__button}>
                            <Button
                                color={colors.primaryRed}
                                disabled={!loading}
                                title="Click to pay"
                                onPress={openPaymentSheet}
                            />
                        </View>
                    </>
                )}
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container__title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        paddingBottom: 70,
    },
    container__subtitle: {
        marginBottom: 60,
    },
    subtitle__content: {
        color: 'white',
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle__wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    container__content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        marginBottom: 40,
    },
    container__confirmation: {
        display: 'flex',
        alignItems: 'center',
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        marginBottom: 40,
    },
    content__price: {
        color: 'white',
        fontSize: 25,
        paddingRight: 10,
    },
    content__digit: {
        color: 'white',
        fontSize: 25,
        paddingRight: 10,
    },
    content__confirmation: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
    },
    content__icon: {
        color: 'white',
        fontSize: 25,
    },

    container__button: {
        minWidth: 200,
    },
})
