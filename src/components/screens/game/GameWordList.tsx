import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type Props = {
  focusedInput: number;
  handleWordPress: (idx: number) => void;
  wordInputs: string[][];
};

const GameWordList = ({focusedInput, handleWordPress, wordInputs}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.wordListTitle}>{wordInputs.length} Words</Text>
      <View style={styles.wordList}>
        {wordInputs.map((word, idx) => (
          <TouchableOpacity
            style={{
              ...styles.wordListItem,
              borderColor: focusedInput === idx ? 'black' : 'none',
              borderWidth: focusedInput === idx ? 1 : 0,
            }}
            onPress={() => handleWordPress(idx)}>
            <Text key={idx} style={styles.wordListText}>
              {idx}.
            </Text>

            {word.map(letter => (
              <Text style={styles.wordListText}>{letter}</Text>
            ))}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wordList: {},
  wordListTitle: {
    fontSize: 25,
    marginBottom: 15,
  },
  wordListItem: {
    flexDirection: 'row',
    marginBottom: 12,
    padding: 5,
  },
  wordListText: {
    fontSize: 18,
    marginHorizontal: 3,
  },
});

export default GameWordList;
