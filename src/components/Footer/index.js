import React from 'react'
import {FooterWrapper} from './styled'
const Footer = (props) => {
  return (
    <FooterWrapper>
      <div className="footer-wrapper">
        <p className="follow">
          <span>FOLLOW</span>
          <span>US</span>
        </p>
        <div className="follow-list">
          <span>PHONE</span>
          <span style={{margin: '0 200px'}}>WACHAT</span>
          <span>EMAIL</span>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer