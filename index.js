const qs = str => document.querySelector(str);


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
  const feedback_delay = new Tone.FeedbackDelay(
    '8n.',
    0.6
  );
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