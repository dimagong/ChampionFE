import React, {useEffect, useState} from 'react'
import {Text, StyleSheet, StatusBar} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Navigation} from '@interfaces/index'
import {StripeProvider} from '@stripe/stripe-react-native'
import {Maybe, Scalars} from '@interfaces/global'
import {receivePublicKeyStripe} from '@data/api/services'
import {PaymentComponent} from '@ui/components'

interface TickerScreenProps {
    navigation: Navigation
}

export const TicketsScreen = ({navigation}: TickerScreenProps) => {
    const [publishableKey, setPublishableKey] =
        useState<Maybe<Scalars['String']>>(null)

    useEffect(() => {
        const fetchPublicKeyStripe = async () => {
            const data = await receivePublicKeyStripe()
            if (data?.publicKey) {
                setPublishableKey(data.publicKey)
            }
        }
        fetchPublicKeyStripe()
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#040507" />
            {/* <Text style={{fontSize: 40, color: 'white'}}>User screen</Text> */}
            {publishableKey ? (
                <StripeProvider publishableKey={publishableKey}>
                    <PaymentComponent />
                </StripeProvider>
            ) : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#040507',
        alignItems: 'center',
    },
})
