import { connect } from 'react-redux';
import { Modal } from '../../../../components/modal/Modal';

const mapStateToPros = state => {
  return {
    open: state.Authentication.open,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const LoginModalContainer = connect(mapStateToPros, mapDispatchToProps)(Modal);

export { LoginModalContainer as LoginModal };
