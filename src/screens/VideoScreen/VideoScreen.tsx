//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {Navigation} from 'src/interfaces';
import {VideoPlayer} from '@src/ui/components/VideoPlayer';
import {Navigation} from '@src/interfaces';

interface ShopScreenProps {
    navigation: Navigation;
}

export const VideoScreen = ({navigation}: ShopScreenProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor="#040507" />
                <Text style={{fontSize: 40, color: 'white'}}>Best moments</Text>
                <VideoPlayer
                // source={{
                //     uri: 'https://video.sportnet.online/videospace/V2/f/futbalsfz.sk/2024/08/25/4a8a8f5b-3b7e-47c9-80e0-f8e48f0b5048.mp4',
                // }}
                />
                {/* <VideoPlayer
                // source={{
                //     uri: 'https://video.sportnet.online/videospace/V2/f/futbalsfz.sk/2024/08/25/4a8a8f5b-3b7e-47c9-80e0-f8e48f0b5048.mp4',
                // }}
                /> */}
                {/* <VideoPlayer
                // source={{
                //     uri: 'https://video.sportnet.online/videospace/V2/f/futbalsfz.sk/2024/08/25/4a8a8f5b-3b7e-47c9-80e0-f8e48f0b5048.mp4',
                // }}
                /> */}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#040507',
        alignItems: 'center',
    },
});
