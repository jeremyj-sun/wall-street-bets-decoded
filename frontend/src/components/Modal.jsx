import React, { Component } from 'react'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import '../styles/Modal.scss';

/*
PROPS:
title
children (contains the modal body)
*/

export class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ open: !this.state.open});
    }

    render() {
        return (
        <MDBModal isOpen={this.state.open} toggle={this.toggle} centered>
          <MDBModalHeader  className="modal-header-wrapper" toggle={this.toggle}>
              <span className="modal-header">{this.props.title}</span></MDBModalHeader>
          <MDBModalBody className="modal-body">
            {this.props.children}
          </MDBModalBody>
          <MDBModalFooter className="modal-footer">
            <MDBBtn color="deep-orange" onClick={this.toggle} className="mx-auto">Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        )
    }
}

export default Modal
