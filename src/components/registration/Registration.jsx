import React from 'react';
import { connect } from 'react-redux';

import MainContent from '../MainContent';
import RegistrationForm from './RegistrationForm';
import * as userActionCreators from '../../action-creators/user';

class RegistrationContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    document.title = 'Registration';

    return (
      <div className="page">
        <MainContent>
          <RegistrationForm {...this.props} />
        </MainContent>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.get('user'),
  };
}

export default connect(mapStateToProps, Object.assign({}, userActionCreators))(RegistrationContainer);
