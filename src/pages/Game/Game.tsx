import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import GameBoard from '../../components/screens/game/GameBoard';
import {GridItemType} from '../../types/gameTypes';

export type Props = {};

const mockWords: string[] = [
  'yellow',
  'blue',
  'purple',
  'abcdefghi',
  //
];

const Game = ({}: Props) => {
  const [words, setWords] = useState<string[]>([]);
  const [letters, setLetters] = useState<string[][]>([]);
  const [wordInputs, setWordInputs] = useState<string[][]>([]);

  useEffect(() => {
    setWords(mockWords);
  }, []);

  useEffect(() => {
    handleFormatGrid(words);
  }, [words]);

  const handleLettterPress = (letter: string) => {};

  const handleFormatGrid = (words: string[]) => {
    // get all letters from words
    let allLetters: string[] = [];
    let arrays = words.forEach((word: string) => {
      const letters = word.split('');
      allLetters = allLetters.concat(letters);
    });

    const display = handleFormatGridItems(allLetters);
    setLetters(display);
  };

  const handleFormatGridItems = (letters: string[]): string[][] => {
    const n: number = Math.ceil(Math.sqrt(letters.length)); // Number of nested arrays
    const result: string[][] = Array.from({length: n}, () => []); // Initialize nested arrays

    // Shuffle letters array
    const shuffled: string[] = letters.sort(() => Math.random() - 0.5);

    // Distribute letters evenly among nested arrays
    let i: number = 0;
    while (shuffled.length > 0) {
      result[i].push(shuffled.shift()!);
      i = (i + 1) % n;
    }

    return result;
  };

  return (
    <View style={styles.container}>
      <GameBoard handleLettterPress={handleLettterPress} letters={letters} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Game;
