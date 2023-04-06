import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {GridItemType} from '../../../types/gameTypes';

export type Props = {
  handleLettterPress: (letter: string) => void;
  letters: GridItemType[][];
};

const GameBoard = ({handleLettterPress, letters}: Props) => {
  return (
    <View style={styles.container}>
      {letters.map((row, idx1) => (
        <View key={`row-${idx1}`} style={styles.row}>
          {row.map((letter, idx2) => (
            <TouchableOpacity
              key={`grid-item-${idx1}-${idx2}`}
              style={styles.button}
              onPress={() => handleLettterPress(letter.value)}>
              <Text style={styles.buttonText}>{letter.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  button: {
    width: 80,
    aspectRatio: 1,
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#ccc',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default GameBoard;
