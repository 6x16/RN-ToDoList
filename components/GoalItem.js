import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity >);
};

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        padding: 5,
        marginVertical: 8,
        alignItems: 'center',
        backgroundColor: '#ecf0fc',
        borderColor: '#1338be',
        borderWidth: 1
    }
})

