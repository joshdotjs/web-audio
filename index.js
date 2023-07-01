const qs = str => document.querySelector(str);

// default bpm: 120

// ==============================================

const playNote = () => {
  const synth = new Tone.Synth().toDestination();

  const play_btn = qs('#play-note-btn');
  play_btn.addEventListener('click', () => {
    console.log('play note');
    if (Tone.context.state !== 'running') {
      Tone.start();
    } 
    synth.triggerAttackRelease('C4', '2n');
  });
};
playNote();

// ==============================================

const playEffect = () => {
  const synth = new Tone.Synth();
  const feedback_delay = new Tone.FeedbackDelay({
    delayTime: 0.5,
    maxDelay: 1,
    feedback: 0.6,
    wet: 0.3,
  });
  synth.connect(feedback_delay);
  feedback_delay.toDestination();

  const play_btn = qs('#play-effect-btn');
  play_btn.addEventListener('click', () => {
    console.log('play effect');
    if (Tone.context.state !== 'running') {
      Tone.start();
    }

    synth.triggerAttackRelease('C4', '2n');
  });
};
playEffect();

// ==============================================

const audioKeys = () => {

  const synth = new Tone.Synth().toDestination();

  // create a keyboard
  const keyboard = new AudioKeys({
    rows: 1,
  });
  console.log('keyboard: ', keyboard);
  
  keyboard.down( (note) => {
    // do things with the note object
    console.log('note: ', note);
    synth.triggerAttackRelease(note.frequency, '8n');
  });
  
  keyboard.up( (note) => {
    // do things with the note object
  });
  
};
audioKeys();

// ==============================================