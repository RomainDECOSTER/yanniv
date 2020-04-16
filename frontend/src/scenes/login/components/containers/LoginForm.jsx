import { connect } from 'react-redux';
import { AuthenticationActionner } from '../../../../services';
import { LoginForm } from '../LoginForm';

const mapStateToPros = state => {
  return {
    username: state.Authentication.username,
    connected: state.Socket.connected,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: username => {
      dispatch(AuthenticationActionner.setUsername(username));
    },
    onChange: e => {
      dispatch(AuthenticationActionner.setUsernameChange(e.target.value));
    },
  };
};

const LoginFormContainer = connect(mapStateToPros, mapDispatchToProps)(LoginForm);

export { LoginFormContainer as LoginForm };
