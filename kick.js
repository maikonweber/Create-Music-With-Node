const _ = require('lodash');
const scribble = require('scribbletune');


const ch = scribble.clip({
     pattern: '[xR][[x[xR]]]'.repeat(16),
     notes: 'C4',
     sizzle: 'sin',
     sizzleReps: 32,
   });
   
   scribble.midi(ch, 'ch.mid');

   const oh = scribble.clip({
     notes: 'C4',
     pattern: '[-x][Rx][Rx][Rx]'.repeat(8),
   });
   
   scribble.midi(oh, 'oh.mid');


