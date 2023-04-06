import {GridItemType} from '../../types/gameTypes';

// format the grid of letters to choose from
export const handleFormatGrid = (
  words: string[],
  setLetters: (value: React.SetStateAction<GridItemType[][]>) => void,
) => {
  let allLetters: string[] = [];

  // get all letters from words
  let arrays = words.forEach((word: string) => {
    const letters = word.split('');
    allLetters = allLetters.concat(letters);
  });

  // format all letters for gameplay
  const display = handleFormatGridItems(allLetters);

  // set state once formatted
  setLetters(display);
};

// format individual grid item
const handleFormatGridItems = (letters: string[]): GridItemType[][] => {
  const n: number = Math.ceil(Math.sqrt(letters.length)); // Number of nested arrays
  const result: GridItemType[][] = Array.from({length: n}, () => []); // Initialize nested arrays

  // Shuffle letters array
  const shuffled: string[] = letters.sort(() => Math.random() - 0.5);

  // Distribute letters evenly among nested arrays
  let i: number = 0;
  while (shuffled.length > 0) {
    // Remove letter
    const letter = shuffled.shift()!;
    //   Format letter for game
    const formattedLetter: GridItemType = {
      // index: {
      //   x: i,
      //   y: result[i].length,
      // },
      status: 'open',
      value: letter,
    };

    // put formatted letter in correct position
    result[i].push(formattedLetter);
    i = (i + 1) % n;
  }

  return result;
};

export const handleFormatInputs = (
  words: string[],
  setWordInputs: (value: React.SetStateAction<string[][]>) => void,
) => {
  const inputs = words.map(word =>
    Array.from({length: word.length}, () => '_'),
  );
  setWordInputs(inputs);
};
