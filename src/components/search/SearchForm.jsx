import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


function RegistrationForm(props) {
  const { setSearchId, trimSearchId, search, searchMeetUps } = props;
  const getProperty = (field) => {
    return search.get('id') || '';
  };
  const inputProps = (field, includeBlur = true) => ({
    value: getProperty(field),
    onChange: e => {
      setSearchId(e.target.value);
    },
    onBlur: includeBlur ? () => trimSearchId(field) : undefined,
  });
  return (
    <div style={{ paddingLeft: '30%', paddingRight: '30%' }}>
      <FormGroup controlId="name">
        <ControlLabel style={{
          fontWeight: 'normal',
          fontSize: '18px',
        }}>Find your meet up</ControlLabel>
        <FormControl type="text"
                     maxLength="60"
                     {...inputProps('name')}/>
        <h6 className="pull-right">
          <small>{getProperty('name').length}/20</small>
        </h6>
      </FormGroup>

      <Button bsStyle="primary" onClick={searchMeetUps}>Search</Button>
    </div>
  );
}

export default RegistrationForm;
