import { connect } from 'react-redux';

import { GameActionner } from '../../../../../services';
import { NewGameForm } from '../NewGameForm';

const mapStateToPros = state => {
  return {
    name: state.Game.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: name => {
      dispatch(GameActionner.gameCreated(name));
    },
    onChange: e => {
      dispatch(GameActionner.changeName(e.target.value));
    },
  };
};

const NewGameFormContainer = connect(mapStateToPros, mapDispatchToProps)(NewGameForm);

export { NewGameFormContainer as NewGameForm };
