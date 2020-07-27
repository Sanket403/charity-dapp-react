import React, { Component } from 'react';
import './Home.css'
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
    })
  }


  render() {
    return (
      <div>
        <div className="bridge-bgd">
          <div className="wrapper-container">
            <h1>Eraswap Token Bridge</h1>
            <h5 className="mrg-home">Transfer Tokens between Ethereum's Main network, and Eraswap network</h5>
            <div className="proceed-box-flex">
              <div className="inner-box">
                <div className="frst-link">
                  <Link to="/token-exchange" className="prcd-btn">Proceed to Token exchange</Link>
                </div>
               <button  className="prcd-btn">Proceed to Bunch Submission</button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for proof */}

        <Modal show={this.state.bunchModal} onHide={this.handleClose} className="date-modal-container" >

          <Modal.Body >
            <div className="exchange-box-wht-modal">
              <div className="exchange-container">
              <p className="prf-md-txt">Submit ESN bunch and get rewards </p>
               <div className="bunch-btn-flex">
               <div className="exc-btn-box">
                  <button className="tr-pn-btn" onClick={() => this.setState({ bunchModal: false })}>Default</button>
                </div>
                <div className="exc-btn-box">
                  <button className="tr-pn-btn" onClick={() => this.setState({ bunchModal: false })}>Advance</button>
                </div>
                 </div>
                <div className="exc-btn-box">
                  <button className="tr-pn-btn" onClick={() => this.setState({ bunchModal: false, depositModal: true })}>GENERATE BUNCH STRIVES</button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>

    );

  }
}
