import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const LoginForm = ({ onClick, onChange, username, connected }) => (
  <Form>
    <Form.Field>
      <label>Username (cf: michto du PDD)</label>
      <input placeholder="michto" onChange={onChange} value={username !== null ? username : ''} />
    </Form.Field>
    <Button
      primary
      type="submit"
      onClick={e => {
        e.preventDefault();
        onClick(username);
      }}
    >
      GOOOOOOO!
    </Button>
  </Form>
);

export { LoginForm };
