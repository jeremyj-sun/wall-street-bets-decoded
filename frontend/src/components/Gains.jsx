import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBox, MDBTypography, MDBIcon, MDBContainer
} from "mdbreact";

const Gains = () => {
    const [stocks, useStocks] = useState([])

    const GetStocks = async () => {
        const emptystr = ''
        const res = await axios.get('/api/gains', {headers : {}, crossdomain: true})
        console.log(res.data.data.children)
        useStocks(res.data.data.children.filter(post => post.data.selftext != emptystr))
    }
    
    //Jeremy: If this takes too long I can add a spinner
    useEffect(() => {
        GetStocks();
    }, [])

    return (
        <div>
            <MDBContainer className="py-4 invisible">
                        top padding
            </MDBContainer>
            {stocks.map(post => <div>{post.data.selftext}<div><br></br></div></div>)}
        </div>
    )
}


export default Gains
