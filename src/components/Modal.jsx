import React from 'react';
import { connect } from 'react-redux';

import loginModal from './modal/LoginModal';

const MODAL_COMPONENTS = {
  LOGIN_DIALOG: loginModal,
};

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

function mapStateToProps(state) {
  return {
    modalType: state.getIn(['modal', 'modalType']),
    modalProps: state.getIn(['modal', 'modalProps']),
  };
}

export default connect(mapStateToProps)(ModalRoot);