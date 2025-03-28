import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export const StarRating = () => {
    const [rating, setRating] = useState(0)

    const stars = Array(5)
        .fill(0)
        .map((_, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    onPress={() => setRating(index + 1)}>
                    <Text
                        style={{
                            fontSize: 24,
                            color: rating > index ? '#ffd700' : '#ccc',
                        }}>
                        &#9733;
                    </Text>
                </TouchableOpacity>
            )
        })

    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {stars}
            <Text style={{fontSize: 18, marginLeft: 10}}>{rating}/5</Text>
        </View>
    )
}
