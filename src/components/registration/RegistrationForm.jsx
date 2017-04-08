import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


function RegistrationForm(props) {
  const { updateUserField, trimUserField, user } = props;
  const getProperty = (field) => {
    return user.get(field) || '';
  };
  const inputProps = (field, includeBlur = true) => ({
    value: getProperty(field),
    onChange: e => {
      updateUserField(field, e.target.value);
    },
    onBlur: includeBlur ? () => trimUserField(field) : undefined,
  });
  return (
    <div style={{ width: '40%' }}>
      <FormGroup controlId="name">
        <ControlLabel style={{
          fontWeight: 'normal',
          fontSize: '18px',
        }}>Login</ControlLabel>
        <FormControl type="text"
                     maxLength="60"
                     {...inputProps('name')}/>
        <h6 className="pull-right">
          <small>{getProperty('name').length}/20</small>
        </h6>
      </FormGroup>
      <FormGroup controlId="password">
        <ControlLabel style={{
          fontWeight: 'normal',
          fontSize: '18px',
        }}>Password</ControlLabel>
        <FormControl type="password"
                     maxLength="60"
                     {...inputProps('password')}/>
        <h6 className="pull-right">
        </h6>
      </FormGroup>
      <FormGroup controlId="password">
        <ControlLabel style={{
          fontWeight: 'normal',
          fontSize: '18px',
        }}>Repeat password</ControlLabel>
        <FormControl type="password"
                     maxLength="60"
                     {...inputProps('password')}/>
        <h6 className="pull-right">
        </h6>
      </FormGroup>
      <Button bsStyle="primary">Register</Button>
    </div>
  );
}

export default RegistrationForm;
