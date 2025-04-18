import React from 'react';
import { View, Text } from 'react-native'
import { styles } from './index'

export default function Index () {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Hello World!</Text>
            <Text style={styles.title}>Jonathan-Armando</Text>
        </View>
    )
}