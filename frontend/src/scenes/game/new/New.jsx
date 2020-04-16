import React from 'react';

import { NewGameModal, NewGameForm } from './components';

const NewGame = () => {
  return (
    <NewGameModal hearder={'Es tu sur de toi ?'}>
      <NewGameForm />
    </NewGameModal>
  );
};

export { NewGame };
