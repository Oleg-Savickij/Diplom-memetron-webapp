import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Modal from './Modal';
import styles from '../css/MainContentStyles.css';

export default class App extends React.Component {
  componentWillMount() {
    document.title = 'Memetronic';
  }

  render() {

    return (
      <div className="application">
        <Header />
        <Navigation path={this.props.location.pathname}/>
        {this.props.children}
        <Modal />
      </div>
    );
  }
}