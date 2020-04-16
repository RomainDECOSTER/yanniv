import React, { Fragment, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import Brand from './components/Brand';
import Join from './components/Join';
import { NewGameLink } from './components/containers';

function AppBar() {
  const [activeItem, setActiveItem] = useState('brand');
  return (
    <Fragment>
      <Menu>
        <Brand name="brand" active={activeItem === 'brand'} onClick={() => setActiveItem('brand')} />
        <NewGameLink setItem={setActiveItem} activeItem={activeItem} />
        <Join name="join" active={activeItem === 'join'} onClick={() => setActiveItem('join')} />
      </Menu>
    </Fragment>
  );
}

export default AppBar;
