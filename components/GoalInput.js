import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.InputContainer}>
                <TextInput
                    placeholder="What do you wanna do?"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    InputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    input: {
        width: '80%', borderColor: 'black',
        borderWidth: 2, padding: 10, margin: 5,
        textAlign: 'center',
        marginBottom: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%'
    },
    buttons: {
        width: '40%',
    }
})