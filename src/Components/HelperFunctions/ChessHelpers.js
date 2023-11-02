// Helping with color assigment to the board
const ColorAssigner = (num, style) => {
  if (num === 8) {
    return (style = "GreySquare");
  } else if ((num / 8) % 1 === 0) {
    if ((num / 8) % 2) {
      return (style = "GreySquare");
    } else {
      return (style = "WhiteSquare");
    }
  } else if ((num % 8) % 2 === Math.floor(num / 8) % 2) {
    // even even or odd odd
    return (style = "GreySquare");
  } else {
    return (style = "WhiteSquare");
  }
};

// take a string of positions and assign those to the board
// make the first two rows and last two rows and fill in the rest with 'e'
// const Filler = (str) => {
//   "e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e";
// };

// let StartingPosition = "r kn b k Q b kn r p p p p p p p p e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e p p p p p p p p r kn b k Q b kn r";
/*       SNIPPET OF BOARD



r kn b k Q b kn r
p p p p p p p p





{id: 1, className: 'WhiteSquare', file: 'b'
{id: 2, className: 'GreySquare', file: 'c'}
{id: 3, className: 'WhiteSquare', file: 'd'}
{id: 4, className: 'GreySquare', file: 'e'}
{id: 5, className: 'WhiteSquare', file: 'f'}
{id: 6, className: 'GreySquare', file: 'g'}
{id: 7, className: 'WhiteSquare', file: 'h'}
{id: 8, className: 'GreySquare', file: 'a'}
{id: 9, className: 'GreySquare', file: 'b'}
{id: 10, className: 'WhiteSquare', file: 'c'}
{id: 11, className: 'GreySquare', file: 'd'}
{id: 12, className: 'WhiteSquare', file: 'e'}
{id: 13, className: 'GreySquare', file: 'f'}
{id: 14, className: 'WhiteSquare', file: 'g'}
{id: 15, className: 'GreySquare', file: 'h'}
{id: 16, className: 'WhiteSquare', file: 'a'}
*/
export { ColorAssigner };
