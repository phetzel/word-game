import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import GameBoard from '../../components/screens/game/GameBoard';
import GameWordList from '../../components/screens/game/GameWordList';

import {GridItemType} from '../../types/gameTypes';
import {handleFormatGrid, handleFormatInputs} from '../../utils/game/gameInit';

export type Props = {};

const mockWords: string[] = [
  'yellow',
  'blue',
  'purple',
  // 'abcdefghi',
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

  const handleLetterPress = (letter: GridItemType) => {
    const focusedWord = wordInputs[focusedInput];
    if (!focusedWord) return;

    const {index, value} = letter;

    // check if focused word has an empty space
    const emptyIndex = focusedWord.indexOf('_');
    if (emptyIndex !== -1) {
      // add word to
      const newInputs = [...wordInputs];
      newInputs[focusedInput][emptyIndex] = value;
      setWordInputs(newInputs);

      // disable used letter
      const newLetters = [...letters];
      newLetters[index.x][index.y].status = 'selected';
      setLetters(newLetters);
    }

    // check if focused word is now full
    if (!wordInputs[focusedInput].includes('_')) {
      // find first incomplete word
      let newFocus = findIncompleteWord();

      if (newFocus === -1) {
        // if all words are complete
      } else {
        // if there is a incomplete word
        setFocusedInput(newFocus);
      }
    }
  };

  const findIncompleteWord = (): number => {
    for (let i = 0; i < wordInputs.length; i++) {
      if (wordInputs[i].includes('_')) {
        return i;
      }
    }
    return -1;
  };

  const handleWordPress = (idx: number) => {
    setFocusedInput(idx);
  };

  return (
    <View style={styles.container}>
      <GameBoard handleLetterPress={handleLetterPress} letters={letters} />
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
