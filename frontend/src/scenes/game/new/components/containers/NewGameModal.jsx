import { connect } from 'react-redux';
import { Modal } from '../../../../../components/modal/Modal';

const mapStateToPros = state => {
  return {
    open: state.Game.openCreate,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const NewGameModal = connect(mapStateToPros, mapDispatchToProps)(Modal);

export { NewGameModal };
