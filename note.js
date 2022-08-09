const _ = require('lodash');
const scribble = require('scribbletune');


const setOfNotes = scribble
  .scale('C3 lydian')
  .concat(scribble.scale('C4 lydian'));
const pattern = 'x__[xx]x_x_'.repeat(8);
const count = pattern.replace(/[^x]/g, '').length;

// Create a clip that plays the C major scale
const notes = [];
for (let i = 0; i < count; i++) {
  notes.push(_.sampleSize([...setOfNotes], 3));
}


scribble.midi(
     scribble.clip({
       notes,
       pattern,
     })
   );