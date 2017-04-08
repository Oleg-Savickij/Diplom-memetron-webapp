import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { browserHistory } from 'react-router';

export default class Navigation extends React.Component {
  linkTo(selectedKey) {
    browserHistory.push(`/${selectedKey}`)
  }

  render() {
    const navigationStyle = {
      position: 'fixed',
      top: '51px',
      left: 0,
      bottom: 0,
      backgroundColor: '#ebebeb',
      width: '160px',
      zIndex: 1000,
      paddingTop: '10px',
      borderRight: "1px solid #cccccc"
    };

    return (
      <div className="navigation" style={navigationStyle}>
        <Nav bsStyle="pills" stacked activeKey='catalogs' onSelect={this.linkTo}>
          <NavItem eventKey='1'>
            Собрания
          </NavItem>
          <NavItem eventKey='2'>
            Создать собрание
          </NavItem>
        </Nav>
      </div>
    );
  }
};