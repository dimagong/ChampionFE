import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text, Button, Dimensions} from 'react-native';
// import Video from 'react-native-video';
// import FullscreenVideo from 'react-native-video';
// import VideoRef from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IVideoPlayer {
    // source: Readonly<Omit<ReactVideoSourceProperties, 'uri'>>;
    source: any;
}
//https://clouddevs.com/react-native/building-video-player-apps/
//https://github.com/TheWidlarzGroup/react-native-video/issues/1509

//https://github.com/TheWidlarzGroup/react-native-video/issues/1509
export const VideoPlayer = () => {
    // const videoRef = useRef<VideoRef>(null);
    const background = require('./../images/football-field.webp');

    const [showVideo, setShowVideo] = useState(false);
    const [isPause, setPauseStatus] = useState(true); // Added new code

    const onProgress = () => {
        // iOS - always gets logged
        // Android - if video starts in 'paused' state, this does not get logged [BUG]
        console.log('debug onProgress');
    };

    const onSeek = () => {
        // iOS - never gets logged
        // Android - gets logged [BUG]
        console.log('debug onSeek');
    };

    return (
        // <View style={styles.container}>
        //     <Text style={{color: 'white'}}>Video</Text>
        //     <Video
        //         // Can be a URL or a local file.
        //         source={{
        //             // uri: 'https://video.sportnet.online/videospace/V2/f/futbalsfz.sk/2024/08/25/4a8a8f5b-3b7e-47c9-80e0-f8e48f0b5048.mp4',
        //             uri: 'https://firebasestorage.googleapis.com/v0/b/champion-db-b530d.appspot.com/o/video%2Fautogol-olimpia-bobrov-24-09.mp4?alt=media&token=6b89f094-86a5-41ac-b496-537b4ce9098e',
        //         }}
        //         // Store reference
        //         ref={videoRef}
        //         // Callback when remote video is buffering
        //         // onBuffer={onBuffer}
        //         // Callback when video cannot be loaded
        //         // onError={onError}
        //         style={styles.video}
        //         controls={true}
        //         // resizeMode="contain"
        //         // repeat={true}
        //         paused={true}
        //         // poster="https://baconmockup.com/300/200/"
        //         // poster="http://img.youtube.com/vi/<youtube-video-id>/default.jpg"
        //         onProgress={() => console.log('onProgress============')}
        //         // onEnd={() => console.log('onEND============')}
        //         // resizeMode={'cover'}
        //         // posterResizeMode={'cover'}
        //         //pictureInPicture={true}
        //         //preferredForwardBufferDuration={10000}
        //         // bufferConfig={{
        //         //     minBufferMs: 15000,
        //         //     maxBufferMs: 50000,
        //         //     bufferForPlaybackMs: 2500,
        //         //     bufferForPlaybackAfterRebufferMs: 5000,
        //         // }}
        //         // fullscreen={true}
        //         //hideShutterView={true}
        //         // seek={1000}
        //     />
        //     {/* <View style={styles.controls}>
        //         <Icon name="play" size={30} color="white" />
        //         <Icon name="pause" size={30} color="white" />
        //         <Icon name="volume-up" size={30} color="white" />
        //     </View> */}
        // </View>
        <View style={styles.container}>
            {/* <Video
                source={{
                    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                }}
                style={styles.video}
                controls={true}
                resizeMode={'cover'}
            /> */}
        </View>
    );
};

// export const VideoPlayer = ({source}: IVideoPlayer) => {
//     return (
//         <View style={styles.container}>
//             <Video
//                 source={source}
//                 style={styles.video}
//                 controls={true}
//                 resizeMode="contain"
//             />
//             <View style={styles.controls}>
//                 <Icon name="play" size={30} color="white" />
//                 <Icon name="pause" size={30} color="white" />
//                 <Icon name="volume-up" size={30} color="white" />
//             </View>
//         </View>
//     );
// };
const styles = StyleSheet.create({
    // container: {
    //     paddingTop: 10,
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderColor: 'white',
    //     borderWidth: 1,
    //     borderStyle: 'solid',
    // },
    // video: {
    //     width: 300,
    //     height: 200,
    // },
    // controls: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: 10,
    // },
    // scrollView: {
    //     backgroundColor: 'green',
    // },
    // video: {
    //     width: 400,
    //     height: 500,
    // },
    // engine: {
    //     position: 'absolute',
    //     right: 0,
    // },
    // body: {
    //     backgroundColor: 'white',
    // },
    // sectionContainer: {
    //     marginTop: 32,
    //     paddingHorizontal: 24,
    // },
    // sectionTitle: {
    //     fontSize: 24,
    //     fontWeight: '600',
    //     color: 'black',
    // },
    // footer: {
    //     color: 'green',
    //     fontSize: 12,
    //     fontWeight: '600',
    //     padding: 4,
    //     paddingRight: 12,
    //     textAlign: 'right',
    // },
    container: {
        flex: 1,
        backgroundColor: '#ebebeb',
    },
    video: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * (9 / 16),
        backgroundColor: 'black',
    },
});
