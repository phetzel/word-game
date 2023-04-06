import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import GameBoard from '../../components/screens/game/GameBoard';
import GameWordList from '../../components/screens/game/GameWordList';

import {GridItemType} from '../../types/gameTypes';
import {handleFormatGrid, handleFormatInputs} from '../../utils/game/gameInit';

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
  const [letters, setLetters] = useState<GridItemType[][]>([]);
  const [wordInputs, setWordInputs] = useState<string[][]>([]);
  const [focusedInput, setFocusedInput] = useState<number>(0);

  useEffect(() => {
    setWords(mockWords);
  }, []);

  useEffect(() => {
    handleFormatGrid(words, setLetters);
    handleFormatInputs(words, setWordInputs);
  }, [words]);

  const handleLettterPress = (letter: string) => {};
  const handleWordPress = (idx: number) => {
    setFocusedInput(idx);
  };

  return (
    <View style={styles.container}>
      <GameBoard handleLettterPress={handleLettterPress} letters={letters} />
      <GameWordList
        wordInputs={wordInputs}
        focusedInput={focusedInput}
        handleWordPress={handleWordPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Game;
