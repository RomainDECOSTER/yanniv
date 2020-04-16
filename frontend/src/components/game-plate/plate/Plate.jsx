import React from 'react';
import { Grid } from 'semantic-ui-react';

function Plate(props) {
  return (
    <Grid divided>
      <Grid.Row>
        <Grid.Column width={3}>
          <p>Player</p>
        </Grid.Column>
        <Grid.Column width={13}>
          <p>Plate</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Plate;
