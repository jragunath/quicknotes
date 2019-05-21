import React from 'react';
import createEmotion from 'create-emotion';
import createEmotionStyled from 'create-emotion-styled';

// pick nonce attribute from script tag
let nonce;
document.querySelectorAll('script').forEach(i => {
  if(i.nonce) {
    nonce = i.nonce;
  }
});

const emotion = createEmotion({ key: 'my-custom-key', nonce });

export const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  caches
} = emotion;

export default createEmotionStyled(emotion, React);