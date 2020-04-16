import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const NewGameForm = ({ onChange, onClick, name }) => {
  return (
    <Form>
      <Form.Field>
        <label>Nom de la boucherie</label>
        <input placeholder={'yanniv à 6'} onChange={onChange} value={name !== null ? name : ''} />
      </Form.Field>
      <Button
        negative
        type={'submit'}
        onClick={e => {
          e.preventDefault();
          onClick(name);
        }}
      >
        Feu !!!!
      </Button>
    </Form>
  );
};

export { NewGameForm };
