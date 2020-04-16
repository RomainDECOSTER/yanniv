import React from 'react';
import { Menu } from 'semantic-ui-react';

function New({ onClick, setItem, activeItem }) {
  return (
    <Menu.Item
      name={'new'}
      active={activeItem === 'new'}
      onClick={() => {
        setItem('new');
        onClick();
      }}
    >
      New game
    </Menu.Item>
  );
}

export default New;
