import React from 'react';
import { connect } from 'react-redux';

import MainContent from '../MainContent';
import SearchForm from './SearchForm';
import * as searchActionCreators from '../../action-creators/search';

class SearchContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">
        <MainContent>
          <SearchForm {...this.props} />
        </MainContent>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.get('search'),
  };
}

export default connect(mapStateToProps, Object.assign({}, searchActionCreators))(SearchContainer);
