import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

type State = {
  bunchModal: boolean;
};

export class Home extends Component<State> {
  state: State = {
    bunchModal: false,
  };

  handleClose = () => {
    this.setState({
      bunchModal: false,
    });
  };

  render() {
    return (
      <div>
        <div className="bridge-bgd">
          <div className="wrapper-container">
            
          </div>
        </div>

        {/* Modal for proof */}

        <Modal
          show={this.state.bunchModal}
          onHide={this.handleClose}
          className="date-modal-container"
        >
          <Modal.Body>
           
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
