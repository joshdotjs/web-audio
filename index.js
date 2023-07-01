const qs = str => document.querySelector(str);

const synth = new Tone.Synth().toDestination();

const play_btn = qs('#play-btn');
play_btn.addEventListener('click', () => {
  console.log('clicked');
  if (Tone.context.state !== 'running') {
    Tone.start();
  } 

  synth.triggerAttackRelease('C4', '2n');
});