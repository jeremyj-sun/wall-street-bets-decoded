import React, { Component } from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBox, MDBTypography, MDBIcon
} from "mdbreact";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../styles/Nav.scss';

const HOME = 0;
const GAINS = 1;
const LOSSES = 2;

export class Nav extends Component {
    state = {
        isOpen: false,
        active: HOME
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleClick = page => () => {
        console.log(this.state.active);
        this.setState({active : page});
    }

    render() {
        return (
            
                <MDBNavbar dark expand="md" className="scrolling-navbar fixed-top py-1">
                    <MDBNavbarBrand>
                        <MDBBox tag="div" className="px-3 logo-wrapper">
                            <MDBBox tag="div" className="mx-auto mt-0 mb-0"><span className="logo1">
                                <MDBBox tag="div" className="avatar-wrapper m-1">
                                    <img src="https://styles.redditmedia.com/t5_2th52/styles/communityIcon_b37n2zfs8k861.png?width=256&s=a9cb63319055ded916e5b12ff03f1e8c63ae6911" className="avatar img-fluid" alt="wall-street-bets" />
                                </MDBBox>
                                <a href="https://www.reddit.com/r/wallstreetbets/" target="_blank" rel="noreferrer" style={{color: 'white'}}>r/wallstreetbets <MDBIcon icon="external-link-square-alt" /></a></span>
                            </MDBBox>
                            <MDBBox tag="div" className="mx-auto mb-0"><span className="logo2 text-monospace">DECODED</span></MDBBox>
                        </MDBBox>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav className="nav-list" left>
                            <MDBNavItem active={this.state.active === HOME}>
                                <MDBNavLink onClick={this.handleClick(HOME)} className="nav-list-item mx-4" to="/">Home <MDBIcon icon="home" /></MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem active={this.state.active === GAINS}>
                                <MDBNavLink onClick={this.handleClick(GAINS)} className="nav-list-item mx-4" to="/gains">Gains <img src="https://styles.redditmedia.com/t5_2th52/styles/postUpvoteIconActive_130uvmw23vb11.png" 
                                className="d-inline" height="24px" alt="upvote"/></MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem active={this.state.active === LOSSES} >
                                <MDBNavLink  onClick={this.handleClick(LOSSES)} className="nav-list-item mx-4" to="#!">Losses  <img src="https://styles.redditmedia.com/t5_2th52/styles/postDownvoteIconActive_lrmmpto33vb11.png" 
                                className="d-inline" height="24px" alt="downvote"/></MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon icon="user" size="lg"/>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default" right={true} basic>
                                        <MDBDropdownItem href="#!">Login</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Register</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            
        );
    }
}

export default Nav
