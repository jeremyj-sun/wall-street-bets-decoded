import React, { Component } from 'react'
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBAnimation, MDBBox } from "mdbreact";
import Nav from './Nav';
import '../styles/Home.scss'
import welcome from '../assets/placeholder-frame.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export class Home extends Component {
    //Image frame tool: https://browserframe.com/
    render() {
        return (
            <React.Fragment>
                
               
                
                {/*Wrapper*/}
                <MDBContainer fluid className="d-flex flex-column justify-content-center align-items-center px-0 backdrop">
                    <MDBContainer className="py-4 invisible">
                        top padding
                    </MDBContainer>
                    <MDBAnimation type="fadeIn" duration="2s">
                        <MDBContainer className="welcome-box z-depth-4 rounded p-4">
                            <MDBRow>
                                <MDBCol>
                                    <img src={welcome} className="img-fluid welcome-img" alt="welcome" height="60%" />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <h1 className="h1-responsive font-weight-bold mt-sm-2">
                                        Follow Reddit stock trends that matter 
                                    </h1>
                                    <h2>
                                        without the memes and shitposts.
                                    </h2>
                                    <hr className="hr-dark mx-3" />
                                    <MDBBox tag="div" className="desc">
                                    <h6>
                                        Catch the latest gains and protect your investments from speculation with <img src="https://styles.redditmedia.com/t5_2th52/styles/communityIcon_b37n2zfs8k861.png?width=256&s=a9cb63319055ded916e5b12ff03f1e8c63ae6911" 
                                        width="30px" className="avatar" alt="wall-street-bets" /><b> r/wallstreetbets <span style={{fontSize: '1.1em'}}className="logo2">DECODED</span></b>.
                                        Subscribe to stay updated with real-time trends on  
                                        <img src="https://styles.redditmedia.com/t5_2th52/styles/communityIcon_b37n2zfs8k861.png?width=256&s=a9cb63319055ded916e5b12ff03f1e8c63ae6911" 
                                        width="30px" className="avatar" alt="wall-street-bets" /><b> r/wallstreetbets</b> without the hassle of searching through posts. 
                                        The next GameStop Squeeze might just be around the corner!
                                    </h6>
                                    </MDBBox>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="my-2">
                                <MDBCol>
                                <MDBBtn color="deep-orange" size="lg">SUBSCRIBE</MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBAnimation>
                    <MDBContainer className="py-4 invisible">
                        bottom padding
                    </MDBContainer>
                </MDBContainer>
                    
            </React.Fragment>
        )
    }
}

export default Home
