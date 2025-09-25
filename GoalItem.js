import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



function GoalItem() {
    return(
        <TouchableOpacity onPress={() => removeGoalHandler(item.key)}>
        <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.text}</Text>
        </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    goalItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#87CEEB',
        borderRadius: 10,
        maxWidth: '100%',     // prevents overflow beyond parent
      },
      goalText: {
        color: 'white',
        fontSize: 16,
        flexWrap: 'wrap',     // allows text to wrap to next line
        overflow: 'hidden',   // hides any overflow
      },

});

export default GoalItem