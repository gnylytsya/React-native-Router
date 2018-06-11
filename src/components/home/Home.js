import React from 'react'
import { TouchableOpacity, Text,View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
    const goToAbout = () => {
        Actions.about()
    };
    const goToMypage = () => {
        Actions.mypage()
    };
    return (
                <View>
                    <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
                        <Text>Go to About</Text>
                    </TouchableOpacity>

        <TouchableOpacity style = {{ margin: 128 }} onPress = {goToMypage}>
            <Text>Go to Mypage</Text>
        </TouchableOpacity>
        </View>
    )
};
export default Home