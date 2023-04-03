import React from 'react';
import {StyleSheet, View} from 'react-native';

export type Props = {
  wordInputs: string[];
};

const GameWordList = ({}: Props) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default GameWordList;
