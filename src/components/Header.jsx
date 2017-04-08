import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';
import * as modalActionsCreators from '../action-creators/modal';

class Header  extends React.Component {
  constructor(props) {
    super(props);
    console.log('HEADER PROPS', props);
  }

  authorizeModal() {
    const { showModal } = this.props;
    showModal('LOGIN_DIALOG')
  }

  get login() {
    return this.props.login ? this.props.login : "";
  }

  render() {
    return <Navbar fixedTop fluid={true} style={{ minWidth: '1200px' }}>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" className="navbarLogoLink"/>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav pullRight>
        <NavItem eventKey={1}>
          <Glyphicon glyph="comment"/> Contact support</NavItem>
        <NavItem />
        <NavItem onClick={this.authorizeModal.bind(this)}>User name</NavItem>
        <NavItem eventKey={3}><Glyphicon glyph="log-out"/></NavItem>
      </Nav>
    </Navbar>;
  }
}

function mapStateToProps(state) {
  return {
    //login: state.getIn(["user", "login"])
  };
}

export default connect(mapStateToProps, Object.assign({}, modalActionsCreators))(Header);