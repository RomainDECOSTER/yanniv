import { connect } from 'react-redux';
import New from '../New';

import { GameActionner } from '../../../../services';

const mapStateToPros = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(GameActionner.createNew());
    },
  };
};

const NewGameLink = connect(mapStateToPros, mapDispatchToProps)(New);

export { NewGameLink };
