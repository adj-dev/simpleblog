import React from 'react';
import ReactDOM from 'react-dom';

import './posts.css';

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="modal" onClick={props.onDismiss}>
      <div className="modal-main" onClick={e => e.stopPropagation()}>
        <div className="modal-header">{props.header}</div>
        <div className="modal-content">{props.content}</div>
        <div className="modal-actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
