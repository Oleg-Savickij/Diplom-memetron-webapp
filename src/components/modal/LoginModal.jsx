import React from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as userActionCreators from '../../action-creators/user';
import * as modalActionCreators from '../../action-creators/modal';

class Login extends React.Component {
  onCancelClick() {
    const { hideModalDialog } = this.props;
    hideModalDialog();
  }

  getProperty(field) {
    return this.props.user.get(field) || '';
  }

  onLoginClick() {
    const { login } = this.props;

    login();
  }

  render() {
    const { updateUserField, trimUserField, user } = this.props;
    const inputProps = (field, includeBlur = true) => ({
      value: this.getProperty(field),
      onChange: e => {
        updateUserField(field, e.target.value);
      },
      onBlur: includeBlur ? () => trimUserField(field) : undefined,
    });
    return (
      <Modal id="loginModal"
             enforceFocus={true}
             show={true}>
        <Modal.Header>
          <Modal.Title>
            Log in or register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormGroup controlId="name">
              <ControlLabel style={{
                fontWeight: 'normal',
                fontSize: '18px',
              }}>Login</ControlLabel>
              <FormControl type="text"
                           maxLength="60"
                           {...inputProps('name')}/>
              <h6 className="pull-right">
                <small>{this.getProperty('name').length}/20</small>
              </h6>
            </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel style={{
              fontWeight: 'normal',
              fontSize: '18px',
            }}>Password</ControlLabel>
            <FormControl type="text"
                         maxLength="60"
                         {...inputProps('password')}/>
            <h6 className="pull-right">
            </h6>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ float: 'left', }} >
            <Link to="registration" onClick={this.onCancelClick.bind(this)}>Registration</Link>
          </div>
          <Button id="login"
                  bsStyle="primary"
                  onClick={this.onLoginClick.bind(this)}>Login</Button>
          <Button bsStyle="default"
                  onClick={this.onCancelClick.bind(this)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({ user: state.get('user') });

export default connect(mapStateToProps,
  Object.assign(userActionCreators, modalActionCreators))(Login);
