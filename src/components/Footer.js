import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

class Footer extends Component {
    render() {
        return (
            <FooterWrapper className="px-sm-5 py-3 ">
                <din className="container d-flex justify-content-between">
                    <a href="tel:+380939966376">+380939966376</a>
                    <a href="mailto:grostmaster@gmail.com">mail to me</a>
                </din>

            </FooterWrapper>
        );
    }
}

const FooterWrapper = styled.footer`
    background: var(--mainBlue);
    margin-top: auto;
    a {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;

export default Footer;