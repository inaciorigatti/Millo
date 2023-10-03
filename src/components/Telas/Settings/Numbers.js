import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const NUMBERS = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [null, 0, null]];

export default function NumericKeyboard({ onPress }) {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      {NUMBERS.map((row, rowIndex) => (
        <View style={styles.row} key={`row-${rowIndex}`}>
          {row.map((number) => (
            <TouchableOpacity
              style={styles.numberButton}
              key={`number-${number}`}
              onPress={() => onPress(number)}
            >
              <Text style={styles.numberText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  numberButton: {
    backgroundColor: '#c7d7d8',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
